const Router = require('koa-router')
const router = new Router()
router.get('/v3/class', (ctx) => {
  ctx.body = {
    v3: 'class3'
  }
})
module.exports = router