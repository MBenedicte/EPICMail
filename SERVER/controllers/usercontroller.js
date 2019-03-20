import users from '../models/users';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Validator from '../Helper/validation';
import UserService from '../database/User';



export default class User{
    static getAllUsers(req,res){
        res.status(200).send({
          status: 200,
          message:"Users fetched successfully",
          data:{
            users
          }
        });
    }

    static async oldUserSignup(req,res){
        const { error } = validateNewUser.validateReistration(req.body)
        if( error ){
            return res.status(400).send({
              status: 400,
              message: error.details[0].message
            });
        }

        let user = users.find(item => item.username === req.body.username);
        if(user)
         {
            return res.status(400).send({
                status: 400,
                message:"User already exists"
            });
    
         }

        user = {
            id: users.length+1,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        }    

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password,salt);
        
        const token = jwt.sign({id: user.id},process.env.JWTPRIVATEKEY)

        users.push(user);
        return res.status(201).send({
            status: 201,
            message:"User registered successfully",
            data:[{
                'token':token
            }]
            
        })
    }
    static async userLogin(req,res){

        const { error }= validateNewUser.validateLogin(req.body)
        if( error ){
            return res.status(404).send({
              status: 404,
              message: error.details[0].message
            })
           
        }

        let user= users.find(item=>item.username === req.body.username);
        
        if(!user) return res.status(404).send({
            status: 404,
            message:"Invalid username or password"
        })
        const validPassword= await  bcrypt.compare(req.body.password, user.password);
     
        if(!validPassword) return res.status(404).send({
            status: 404,
            message:"Invalid username or password"
        })

        const token= jwt.sign({id: user.id},process.env.JWTPRIVATEKEY)
        res.status(200).send({
            status: 200,
            message: "User signed in successfully",
            data:[{
                'token':token
            }]
        })
    }
    static async userSignup(req, res) {
        try {
            //valid req
            const isInvalid = Validator.createUser(req.body);
            if(isInvalid) {
                return res.status(400).send({
                    status: 400,
                    message: isInvalid
                });
            }
            // check if user exists
            const existingUser = await UserService.readOne(`username = $1 and email = $2`, [req.body.username, req.body.email]);
            
            if(existingUser && existingUser.id) {
                return res.status(400).send({
                    status: 400,
                    message: "User already existed"
                });
            }
            
            // encrypt password
            req.body.password = bcrypt.hashSync(req.body.password, 10);
            //create new user
            const createdUser  = await UserService.create(req.body);
            
            return res.status(201).send({
                status: 201,
                data: createdUser
            })

        } catch (error) {
            //consolidate all error into this exiting point
            return res.status(400).send({
                status: 400,
                message: error
            })   
        }
        
    }
}

