import users from '../models/users';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import validateNewUser from '../Helper/validation'


export default class User{
    static getAllUsers(req,res){
        res.status(200).send({
          status: 200,
          message:"All users",
          data:{
            users
          }
        });
    }

    static async userSignup(req,res){

        let user= users.find(item => item.username === req.body.username);
        if(user)
         {
            return res.status(400).send({
                status: 400,
                message:"User already exists"
            });
    
         }
        user ={
            id: users.length+1,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        }       

        const { error }= validateNewUser.validateReistration(req.body)
        if( error ){
            res.status(400).send({
              status: 400,
              message: error.details[0].message
            })
            return;
        }


        const salt = await bcrypt.genSalt(10);
        user.password= await bcrypt.hash(user.password,salt);
        
        const token= jwt.sign({id: user.id},process.env.JWTPRIVATEKEY)

        users.push(user);

        res.status(200).send({
            status: 200,
            message:"User registered successfully",
            data:[{
                'token':token
            }]
            
        })
    }
    static async userLogin(req,res){

        const { error }= validateNewUser.validateLogin(req.body)
        if( error ){
            res.status(400).send({
              status: 400,
              message: error.details[0].message
            })
           return;
        }

        let user= users.find(item=>item.username === req.body.username);
        
        if(!user) return res.status(400).send({
            status: 400,
            message:"Invalid username or password"
        })
        const validPassword= await  bcrypt.compare(req.body.password, user.password);
        if(!validPassword) return res.status(400).send({
            status: 400,
            message:"Invalid username or password"
        })
        user={
            username: req.body.username,
            password: req.body.password
        }

        const token= jwt.sign({id: user.id},process.env.JWTPRIVATEKEY)
        res.status(200).send({
            status: 200,
            message: "User signed in successfully",
            data:[{
                'token':token
            }]
        })
    }

}

