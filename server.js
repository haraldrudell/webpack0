import {RestServer} from './src/restserver'

new RestServer({address: '127.0.0.1', port: 8081, debug: !!~process.argv.indexOf('debug')})
