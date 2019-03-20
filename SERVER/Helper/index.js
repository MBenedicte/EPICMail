import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const Helper = {

  hashPassword(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
  },
 
  comparePassword(hashPassword, password) {
    return bcrypt.compareSync(password, hashPassword);
  },
  
  async generateToken(email) {
    const token = await jwt.sign({
      userEmail: email
    },process.env.JWTPRIVATEKEY );
    return token;
  }
}

export default Helper;