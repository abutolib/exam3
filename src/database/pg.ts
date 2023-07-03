import {Pool} from 'pg'

class Database {
  private pool : Pool

  constructor(){
    this.pool = new Pool ({
      connectionString:"postgres://feqyavsf:kJrkePyv-9OHJRRrk4dg33vdDz7vJeXh@tyke.db.elephantsql.com/feqyavsf"
    })
  }

  public async fetchAll(SQL:string,params:any[]=[]):Promise<any>{
    const client = await this.pool.connect()
    try {
      const {rows} = await client.query(SQL,params)
      return rows
    } catch (error) {
     console.log(error);
    }finally{
      client.release()
    }
  }
}

export default new Database();