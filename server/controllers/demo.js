const https = require('https')
const querystring = require('querystring')
const {mysql} = require('../qcloud')

const host = 'api.douban.com'
const key = '0df993c66c0c636e29ecbb5344252a4a'

// nodejs调用豆瓣第三方接口
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
    // get方法参数
    if (options.method === 'GET') {
        options.path += '?' + content
    }
    return new Promise((resolve, reject) => {
        let req = https.request(options, (res) => {
            res.setEncoding('utf8')
            res.on('data', function (chunk) {
                // 数据返回成功
                resolve(chunk)
            })
        })
        req.on('error', function (err) {
            reject(err)
        })
        // post方法参数
        if (options.method === 'POST') {
            req.write(content)
        }
        req.end()
    })
}

module.exports = async function (ctx, next) {
    let {isbn, method, openId, nickName, avatarUrl} = ctx.query
    // 查询数据库是否存在图书
    let same = await mysql('books').select('*').where({ isbn: isbn })
    if (same.length) {
        ctx.state = { code: -1, data: {msg: '图书已存在!'} }
        return
    }
    // 获取豆瓣图书数据
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
        translator,
        tags
    } = data
    try {
        // 获取豆瓣数据插入数据库
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
            translator: translator.join(','),
            tags: tags.map((item) => {
              return item.title
            }).join(','),
            nickName,
            avatarUrl
        })
        ctx.state = {code: 0, data: data}
    } catch (e) {
        ctx.state = { code: -1, data: {msg: e.sqlMessage} }
    }
}
