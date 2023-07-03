import db from '../../database/pg'

class CategoryService {
  async getAllCategories() {
    const categories = await db.fetchAll('SELECT * FROM categories')
    return categories
  }
  async postCategory(category_name:string) {
    const category = await db.fetchAll(
      `INSERT INTO
        categories(category_name)
      VAlUES
        ($1) returning *`, 
      [category_name])
    return category
  }
  async putCategory(category_id:number,category_name:string) {
    const category = await db.fetchAll(
      `UPDATE categories
      SET
        category_name = $2
      WHERE category_id = $1 returning *`, 
      [category_id,category_name])
    return category
  }
  async deleteCategory(category_id:number) {
    const category = await db.fetchAll(
      `DELETE FROM categories
       WHERE category_id = $1 returning *`, 
      [category_id])
    return category
  }
}

export default new CategoryService()