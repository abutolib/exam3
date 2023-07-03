import express,{Application, Router,Request,Response} from 'express'
import cors from 'cors'
import {resolve} from 'path'
import fileUpload from 'express-fileupload';



class App {
  private app : Application

  constructor (router:Router){
    this.app = express()
    this.Middlewares()
    this.Routers(router)
  }

  server(){
    return this.app
  }

  private Middlewares(){
    this.app.use(express.json())
    this.app.use(cors())
    this.app.use(express.static(resolve('uploads')))
    this.app.use(fileUpload())
    this.app.use(express.json())
  }

  private Routers(router : Router){
    this.app.use('/',router)
  }
}

export default App;