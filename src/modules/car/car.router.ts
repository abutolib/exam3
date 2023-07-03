import { Router } from "express";
import carController from "./car.controller";

class CategoryRouter{
  public router = Router()

  constructor(){
    this.Routers()
  }

  public Routers(){
    this.router.get('/cars',carController.getAllCars)
    this.router.get('/cars/:car_id',carController.getCarById)
    this.router.post('/cars/:car_id',carController.postCar)
    this.router.put('/cars/:car_id',carController.putCar)
    this.router.delete('/cars/:car_id',carController.deleteCar)
  }
}

export default CategoryRouter