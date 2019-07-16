const https = require('https')
const querystring = require('querystring')
const {mysql} = require('../qcloud')

const host = 'api.douban.com'
const key = '0df993c66c0c636e29ecbb5344252a4a'

function get (url, method, data) {
    let content = querystring.stringify(data)
    let options = {
        hostname: host,
        path: url,
        method: method,
        headers: {
            'Content-Type': 'json'
        }
    }
    if (options.method === 'GET') {
        options.path += '?' + content
    }
    return new Promise((resolve, reject) => {
        let req = https.request(options, (res) => {
            res.setEncoding('utf8')
            res.on('data', function (chunk) {
                resolve(chunk)
            })
        })
        req.on('error', function (err) {
            reject(err)
        })
        if (options.method === 'POST') {
            req.write(content)
        }
        req.end()
    })
}

module.exports = async function (ctx, next) {
    let {isbn, method, openId} = ctx.query
    let same = await mysql('books').select('*').where({ isbn: isbn })
    if (same.length) {
        ctx.state = { code: -1, data: {msg: '图书已存在!'} }
        return
    }
    let data = JSON.parse(await get('/v2/book/isbn/:' + isbn, method, {
        apikey: key
    }))
    if (data.msg) {
        ctx.state = { code: -1, data: {msg: data.msg} }
        return
    }
    let {
        isbn13,
        title,
        image,
        id,
        price,
        summary,
        publisher,
        pubdate,
        rating,
        author,
        translator
    } = data
    try {
        await mysql('books').insert({
            isbn: isbn13,
            openId,
            title,
            bookId: id,
            image,
            price,
            summary,
            publisher,
            pubdate,
            rating: rating.average,
            author: author.join(','),
            translator: translator.join(',')
        })
        ctx.state = {code: 0, data: data}
    } catch (e) {
        ctx.state = { code: -1, data: {msg: e.sqlMessage} }
    }
}
