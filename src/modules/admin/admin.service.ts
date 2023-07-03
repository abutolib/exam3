import db from '../../database/pg'

type gearbook = 'Avtomat karobka' | 'Mexanika'

class AdminService {

  async getAdmin() {
    const admin = await db.fetchAll('SELECT * FROM admin')
    return admin
  }
}

export default new AdminService()