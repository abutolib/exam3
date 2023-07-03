import jwt from 'jsonwebtoken'

const SECRET = 'olma'

export default {
  sign:(payload:object) => jwt.sign(payload,SECRET),
  verify:(token:string) => jwt.verify(token,SECRET)
}