const Router = require('koa-router')
const router = new Router()
router.get('/v1/book', (ctx) => {
  ctx.body = {
    v1: 'book'
  }
})
module.exports = router