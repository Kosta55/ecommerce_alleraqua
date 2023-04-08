import express from 'express'
const router = express.Router()
import { protect, admin } from '../middleware/authMiddleware.js'
import { createCategory, deleteCategory, getCategories, getCategoryById, updateCategory } from '../controllers/categoryController.js'


router.get('/', getCategories)
router.get('/:id', getCategoryById)
router.post('/', protect, admin, createCategory)
router.delete('/:id', protect, admin, deleteCategory)
router.put('/:id', protect, admin, updateCategory)

export default router