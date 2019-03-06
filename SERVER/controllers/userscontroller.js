import users from '../models/users';
import bcrypt from 'bcrypt';


 class User{
    static async createNewUser(req,res){
        let user= users.find(item=>item.username===(req.body.username))
         if(user) return res.send({status: 400, messages:'username already exists'}) 

         user= {
            id: users.length+1,
            firstname: req.body.firstname,
            lastname:req.body.lastname,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        }

        const salt= await bcrypt.genSalt(10)
        user.password= await  bcrypt.hash(user.password, salt)
        users.push(user);
        res.send({
            status:200,
            message:'User successfully registered',
            data: user
        });
    }

    static async loginUser(req,res){
        let user= users.find(item=>item.username===(req.body.username))
         if(!user) return res.send({status: 400, messages:'Invalid username or password'}) 

       const validPassword= await bcrypt.compare(req.body.password,user.password)
       if(!validPassword) return res.send({status: 400, messages:'Invalid username or password'}) 

       res.send({
           status:200,
           message:'user successfully signed in'
       })
    }
}



export default User;