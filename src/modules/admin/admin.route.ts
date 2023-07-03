import { Router } from "express";
import adminController from "./admin.controller";

class AdminRouter{
  public router = Router()

  constructor(){
    this.Routers()
  }

  public Routers(){
    this.router.post('/admin',adminController.postAdmin)
  }
}

export default AdminRouter