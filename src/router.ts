import {Router} from 'express'
import CategoryRouter from './modules/category/category.route'
import CarRouter from './modules/car/car.router'
import AdminRouter from './modules/admin/admin.route'

const router = Router()


const categoryRouter =  new CategoryRouter()
const carRouter =  new CarRouter()
const adminRouter =  new AdminRouter()

router.use('/',categoryRouter.router)
router.use('/',carRouter.router)
router.use('/',adminRouter.router)


export default router