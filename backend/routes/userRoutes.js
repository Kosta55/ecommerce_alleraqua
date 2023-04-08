import express from 'express'
import { loginUser, getUserProfile, registerUser, updateUserProfile, getUsers, deleteUser, getUserById, updateUser } from '../controllers/userController.js'
const router = express.Router()
import { protect, admin } from '../middleware/authMiddleware.js'


router.route('/').get(protect, admin, getUsers)   
router.post('/register', registerUser)
router.post('/login', loginUser)
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)
router
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser)

export default router