import { Router } from "express";
import users from "../controllers/usercontroller";


const userRouter=Router();

 userRouter.post('/auth/signup',users.userSignup);
userRouter.post('/auth/login', users.userLogin);
userRouter.get('/users',users.getAllUsers);

export default userRouter;