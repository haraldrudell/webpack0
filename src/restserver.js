import express from 'express'
import {EventEmitter} from 'events'

export class RestServer extends EventEmitter{
  constructor(o) {
    super()
console.log(this.constructor.name, 'constructor pid:', process.pid)
    process.kill(process.pid, 'SIGUSR1')
    debugger
    this.emitError = this.emitError.bind(this)
    new Promise((resolve, reject) => {
      // 160630 express@4.14.0
      // the express default export is a single function named createApplication of type Function
      console.log(this.constructor.name, 'express default export function name:', express.name)
      // app is an anonymous function of type EventEmitter
      var app = express()
        .use(express.static('public')) // middleware is function (req, res, next)
      // app.listen() returns a Server object
      var server = app.listen(o.port, o.address, this.handleRequest.bind(this))
    })
    .catch(e => process.nextTick(this.emitError, e))
  }

  handleRequest() {
    var x = 1
console.log(this.constructor.name, 'handleRequest')
    debugger
    x++
console.log(this.constructor.name, x)
  }

  emitError(e) {
console.log(this.constructor.name, 'ERROR')
    this.emit('error', e)
  }
}
