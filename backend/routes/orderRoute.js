import express from 'express';
import authuser from '../middlewares/authUser.js';
import { getAllOrders, getUserOrders, placeOrderCOD, placeOrderStripe } from '../controllers/orderController.js';
import authSeller from '../middlewares/authSeller.js';

const orderRouter = express.Router();

orderRouter.post('/cod', authuser, placeOrderCOD)
orderRouter.post('/stripe', authuser, placeOrderStripe)
orderRouter.get('/user', authuser, getUserOrders)
orderRouter.get('/seller', authSeller, getAllOrders)

export default orderRouter;