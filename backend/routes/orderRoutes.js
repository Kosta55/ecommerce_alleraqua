import express, { Router } from 'express'
import { addOrderItems, getMyOrders, getOrderById, getOrders, updateOrderToDelivered, updateOrderToPaid, deleteOrder } from '../controllers/orderController.js'
const router = express.Router()
import { protect, admin } from '../middleware/authMiddleware.js'


router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders)
router.route('/myorders').get(protect, getMyOrders)
router.route('/:id/pay').put(protect,updateOrderToPaid)
router.route('/:id/deliver').put(protect,admin, updateOrderToDelivered)
router.route('/:id').get(protect,getOrderById).delete(protect, admin, deleteOrder)




export default router