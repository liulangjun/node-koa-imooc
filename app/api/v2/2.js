const Router = require('koa-router')
const router = new Router()
router.get('/v2/book', (ctx) => {
  ctx.body = {
    v2: 'book'
  }
})

module.exports = router