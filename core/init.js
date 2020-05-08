const requireDirectory = require('require-directory')
const Router = require('koa-router')

class AppManager {
  static init(app) {
    AppManager.app = app
    AppManager.initManager()
  }

  static initManager() {
    
    
      console.log('process.cwd()', process.cwd());
      
      requireDirectory(module, `${process.cwd()}/app/api`, {
        visit: whenLoad
      })
      function whenLoad  (v) {
        if (v instanceof Router) {
          AppManager.app.use(v.routes())
        }
      }
  }
}
module.exports = AppManager