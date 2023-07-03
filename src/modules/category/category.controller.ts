import { Request ,Response} from "express";
import categoryService from "./category.service";
import fileUpload, { UploadedFile } from 'express-fileupload';

// interface CustomRequest extends Request {
//   files: {
//     file: UploadedFile; // Customize this if you have multiple file upload fields
//   };
// }

class CategoryController {
  async getAllCategories(req:Request,res:Response):Promise<void>{
    const categories = await categoryService.getAllCategories()
    res.send(categories)
  }
  async postCategory(req:Request,res:Response):Promise<void>{
    const {category_name} = req.body
    // const file: UploadedFile = req.files.file as UploadedFile;
    // const filePath = Date.now() + file.name.replace(/\s/g, '')
    const category = await categoryService.postCategory(category_name)
    // file.mv(`uploads/${file.name}`, (err) => {
    //   if (err) {
    //     console.error(err);
    //     return res.status(500).json({ message: 'Error occurred while uploading file' });
    //   }
  
    //   res.json({ message: 'File uploaded successfully' });
    // });
    res.send(category)
  }
  async putCategory(req:Request,res:Response):Promise<void>{
    const {category_id,category_name} = req.body
    // const file: UploadedFile = req.files.file as UploadedFile;
    // const filePath = Date.now() + file.name.replace(/\s/g, '')
    const category = await categoryService.putCategory(category_id,category_name)
    res.send(category)
  }
  async deleteCategory(req:Request,res:Response):Promise<void>{
    const {category_id} = req.body
    const category = await categoryService.deleteCategory(category_id)
    res.send(category)
  }
}

export default new CategoryController()