const {mysql} = require('../qcloud')

module.exports = async function (ctx, next) {
  let {page, size} = ctx.query
  try {
    //分页倒序获取列表的数据
    let data = await mysql('books').select('*')
                .limit(size).offset(Number(page) * size)
                .orderBy('id', 'desc')
    ctx.state = {code: 0, data: data}
  } catch (e) {
    ctx.state = { code: -1, data: {msg: e.sqlMessage} }
  }
}
