import { Request ,Response} from "express";
import adminService from "./admin.service";
import { hashPassword} from "../../utils/model";
import jwt from "../../utils/jwt";

type admin = {
admin_name:string,
admin_password:string
}

class AdminController {
  
  async postAdmin(req:Request,res:Response):Promise<void>{
    let {admin_name,admin_password} = req.body
    const admins = await adminService.getAdmin()
    admin_password = hashPassword(admin_password)
    const admin = admins.find(
      (admin:admin) => admin.admin_name == admin_name && admin.admin_password == admin_password
    );
    // if (!admin) next(new BadRequestError(400, "Invalid username or passord"));
    // delete admin.password;
    res.status(200).json({
      status: 200,
      message: "success",
      //access_token: jwt.sign({ admin_name: admin.admin_name }),
      data: admin,
    });
    res.send(admin)
  }

}

export default new AdminController()