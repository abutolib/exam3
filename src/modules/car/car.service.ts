import db from '../../database/pg'

type gearbook = 'Avtomat karobka' | 'Mexanika'

class CategoryService {
  async getAllCars() {
    const cars = await db.fetchAll('SELECT * FROM cars')
    return cars
  }
  async getCarById(car_id:number) {
    const cars = await db.fetchAll('SELECT * FROM cars where car_id = $1',[car_id])
    return cars
  }
  async postCar(category_id:number,car_name:string,car_price:number,marka:string,tanirovka:boolean,motor:number,color:string,distance:number,gearbook:gearbook,destcription:string,ichki_rasm:string,tashqi_rasm:string) {
    const car = await db.fetchAll(
      `INSERT INTO
        cars(category_id,car_name,car_price,marka,tanirovka,motor,color,distance,gearbook,destcription,ichki_rasm,tashqi_rasm)
      VAlUES
        ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12),returning *`, 
      [category_id,car_name,car_price,marka,tanirovka,motor,color,distance,gearbook,destcription,ichki_rasm,tashqi_rasm])
    return car
  }
  async putCar(car_id:number,category_id:number,car_name:string,car_price:number,marka:string,tanirovka:boolean,motor:number,color:string,distance:number,gearbook:gearbook,destcription:string,ichki_rasm:string,tashqi_rasm:string) {
    const car = await db.fetchAll(
      `UPDATE cars
        SET category_id =$2,car_name =$3,car_price=$4,marka=$5,tanirovka=$6,motor=$7,color=$8,distance=$9,gearbook=$10,destcription=$11,ichki_rasm=$12,tashqi_rasm=$13)
       WHERE car_id = $1 returning *`, 
      [car_id,category_id,car_name,car_price,marka,tanirovka,motor,color,distance,gearbook,destcription,ichki_rasm,tashqi_rasm])
    return car
  }
  async deleteCar(car_id:number) {
    const car = await db.fetchAll(
      `DELETE FROM cars
       WHERE car_id = $1 returning *`, 
      [car_id])
    return car
  }
}

export default new CategoryService()