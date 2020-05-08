const catchError = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    ctx.body = '服务器又挂了， 哈哈'
  }
}

module.exports = catchError