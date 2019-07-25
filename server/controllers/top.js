const {mysql} = require('../qcloud')

module.exports = async function (ctx, next) {
  try {
    // 查询图书浏览量最高的9条数据
    let data = await mysql('books').select('*')
      .limit(9)
      .orderBy('visit', 'desc')
    ctx.state = {code: 0, data: data}
  } catch (e) {
    ctx.state = { code: -1, data: {msg: e.sqlMessage} }
  }
}
