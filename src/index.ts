import http from 'http'
import router from './router'
import App from './server'

const app = new App (router)

const server = http.createServer(app.server())

server.listen(5000,() => console.log('server is running'))