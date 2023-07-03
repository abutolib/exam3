import { Request ,Response} from "express";
import carService from "./car.service";

import multer  from "multer";

const upload = multer({ dest: 'uploads/' });

// app.post('/upload', upload.single('file'), (req: Request, res: Response) => {
//   if (!req.file) {
//     res.status(400).json({ message: 'No file uploaded' });
//   } else {
//     res.json({ message: 'File uploaded successfully', filename: req.file.filename });
//   }
// });

class CarController {
  
  async getAllCars(req:Request,res:Response):Promise<void>{
    const cars = await carService.getAllCars()
    res.send(cars)
  }
  async getCarById(req:Request,res:Response):Promise<void>{
    const {car_id} = req.params
    const car = await carService.getCarById(+car_id)
    res.send(car)
  }
  async postCar(req:Request,res:Response):Promise<void>{
    const {category_id,car_name,car_price,marka,tanirovka,motor,color,distance,gearbook,destcription,ichki_rasm,tashqi_rasm} = req.body
    const cars = await carService.postCar(category_id,car_name,car_price,marka,tanirovka,motor,color,distance,gearbook,destcription,ichki_rasm,tashqi_rasm)
    res.send(cars)
  }
  async putCar(req:Request,res:Response):Promise<void>{
    const {category_id,car_name,car_price,marka,tanirovka,motor,color,distance,gearbook,destcription,ichki_rasm,tashqi_rasm} = req.body
    const {car_id}=req.params
    const cars = await carService.putCar(+car_id,category_id,car_name,car_price,marka,tanirovka,motor,color,distance,gearbook,destcription,ichki_rasm,tashqi_rasm)
    res.send(cars)
  }
  async deleteCar(req:Request,res:Response):Promise<void>{
    const {car_id} = req.params
    const car = await carService.deleteCar(+car_id)
    res.send(car)
  }
}

export default new CarController()