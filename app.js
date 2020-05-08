const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const catchError = require('./middlewares/exception/catchError')

const app = new Koa()
app.use(catchError)
app.use(bodyparser())
const AppManager = require('./core/init')

AppManager.init(app)



app.listen(7001)