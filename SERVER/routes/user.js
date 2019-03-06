import { Router } from "express";
import users from '../controllers/userscontroller'


const userRouter=Router();

userRouter.post('/auth/signup',users.createNewUser);
userRouter.post('/auth/login', users.loginUser);

export default userRouter;