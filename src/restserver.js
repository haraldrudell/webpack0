import express from 'express'
import {EventEmitter} from 'events'
import {AppLauncher} from './applauncher'

export class RestServer extends EventEmitter{
  constructor(o) {
    super()
    new AppLauncher
    if (o.debug) process.kill(process.pid, 'SIGUSR1') // enable debugging for this process
    this.emitError = this.emitError.bind(this)
    this.requestNo = 0

    // 160630 express@4.14.0
    // the express default export is a single function named createApplication of type Function
    console.log(this.constructor.name, 'express default export function name:', express.name)
    // app is an anonymous function of type EventEmitter
    var app = express()
      .get('/:id', this.handleRequest.bind(this))
      .use(express.static('public')) // middleware is function (req, res, next)
    // app.listen() returns a Server object
    var server = app.listen(o.port, o.address, e => {
      if (!e) {
        let a = server.address()
        console.log(`${this.constructor.name} Listening on http://${a.address}:${a.port}`)
      } else this.emitError(e)
    })
  }

  handleRequest(req, res) {
    var id = req.params.id
    var result = `${this.constructor.name} request# ${++this.requestNo} for id: ${id}`

    debugger

    console.log(result)
    res.end(result)
  }

  emitError(e) {
    console.log(this.constructor.name, 'ERROR')
    this.emit('error', e)
  }
}
