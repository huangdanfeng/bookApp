const {mysql} = require('../qcloud')

module.exports = async function (ctx, next) {
  let {isbn} = ctx.query
  try {
    // 根据isbn号查询图书信息
    let data = await mysql('books').select('*').where('isbn',isbn)
    // 更新图书浏览量
    let status = await mysql('books').select('*').where('isbn',isbn)
      .update({
      visit: data[0].visit + 1
    })
    ctx.state = {code: 0, data: data}
  } catch (e) {
    ctx.state = { code: -1, data: {msg: e.sqlMessage} }
  }
}
