import db from './index'

class UserModel{
     static async create() {
        try {
            const res= db.query(`INSERT INTO users(firstname, lastname, email, username,password) values ($1, $2, $3, $4, $5) returning *`)
            return res
        } catch (error) {
            throw error;  
        }
    }
}

export default UserModel;