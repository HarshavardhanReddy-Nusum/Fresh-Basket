import express from 'express';
import { isAuth, login, logout, register } from '../controllers/userController.js';
import authuser from '../middlewares/authUser.js';

const userRouter = express.Router();

userRouter.post("/register", register)
userRouter.post("/login", login)
userRouter.get('/is-auth', authuser, isAuth)
userRouter.get('/logout', authuser, logout)

export default userRouter;