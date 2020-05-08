const Router = require('koa-router')
const router = new Router()
router.get('/v1/class', (ctx) => {
  ctx.body = {
    v1: 'class222'
  }
})
router.post('/v1/:id/class', (ctx) => {
  const path = ctx.params
  const query = ctx.request.query
  const headers = ctx.request.headers
  const body = ctx.request.body
  console.log(query, aaa);
  
  ctx.body = {
    v1: 'class222222333'
  }
})

module.exports = router