import { Router } from "express";
import categoryController from "./category.controller";


class CategoryRouter{
  public router = Router()

  constructor(){
    this.Routers()
  }

  public Routers(){
    this.router.get('/categories',categoryController.getAllCategories)
    this.router.post('/categories',categoryController.postCategory)
    this.router.put('/categories',categoryController.putCategory)
    this.router.delete('/categories',categoryController.deleteCategory)
  }
}

export default CategoryRouter