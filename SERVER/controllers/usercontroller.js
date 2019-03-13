import users from '../models/users';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


export default class User{
    static getAllUsers(req,res){
        res.send(users);
    }

    static async userSignup(req,res){
        let user= users.find(item=>item.username === req.body.username);
        if(user) return res.status(400).send({
            status: 400,
            message:"Users already exists"
        });

        user={
            id: users.length+1,
            fistname: req.body.fistname,
            lastname: req.body.lastname,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        }

        const salt = await bcrypt.genSalt(10);
        user.password= await bcrypt.hash(user.password,salt);
        
        const token= jwt.sign({id: user.id},process.env.JWTPRIVATEKEY)

        users.push(user);

        res.send({
            status: 200,
            message:"User registered successfully",
            data:[{
                'token':token
            }]
        })
    }
    static async userLogin(req,res){
        let user= users.find(item=>item.username === req.body.username);
        if(!user) return res.send({
            status: 400,
            message:"Invalid username or password"
        })

        user={
            username: req.body.username,
            password: req.body.password
        }

        const validPassword= bcrypt.compare(req.body.password, user.password);
        if(!validPassword) return res.send({
            status: 400,
            message:"Invalid username or password"
        })

        const token= jwt.sign({id: user.id},process.env.JWTPRIVATEKEY)
        res.send({
            status: 200,
            message: "User signed in successfully",
            data:[{
                'token':token
            }]
        })
    }

}