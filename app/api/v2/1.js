const Router = require('koa-router')
const router = new Router()
router.get('/v2/class', (ctx) => {
  ctx.body = {
    v2: 'class'
  }
})
module.exports = router