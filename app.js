const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const catchError = require('./middlewares/exception/catchError')

const app = new Koa()
app.use(catchError)
app.use(bodyparser())
const AppManager = require('./core/init')
console.log('1111测试222333444');

AppManager.init(app)



app.listen(7001)