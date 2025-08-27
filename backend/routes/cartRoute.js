import express from 'express'
import authuser from "../middlewares/authUser.js";
import { updateCart } from "../controllers/cartController.js";


const cartRouter = express.Router();

cartRouter.post('/update', authuser, updateCart)

export default cartRouter;