import Category from "../models/categoryModel.js"
import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

//@desc Fetch all categories
//@route GET /api/categories
//@access Public
const getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find({})

  if (!categories?.length) {
    res.status(404)
    throw new Error('Categories not found')
  }

  res.status(200).json(categories)
})

//@desc Fetch all categories
//@route GET /api/categories/:id
//@access Public
const getCategoryById = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id)

  if (category) {
    res.status(200).json(category)
  } else {
    res.status(404)
    throw new Error('Category not found')
  }
})

//@desc Delete a category
//@route DELETE /api/categories/:id
//@access Private/Admin
const deleteCategory = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id)

  if (category) {
    await category.remove()
    res.status(200).json({ message: 'Category removed' })
  } else {
    res.status(404)
    throw new Error('Category not found')
  }
})

//@desc Create a category
//@route POST /api/category
//@access Private/Admin
const createCategory = asyncHandler(async (req, res) => {
  const { name } = req.body 

  if (!name) {
    res.status(400)
    throw new Error('Please provide name')
  }

  const category = await Category.create({ name })

  res.status(201).json(category)
})

//@desc Update a category
//@route PUT /api/category/:id
//@access Private/Admin
const updateCategory = asyncHandler(async (req, res) => {
  const { name } = req.body 

  const category = await Category.findById(req.params.id)

  if (category) {
    category.name = name
    const updatedCategory = await category.save()
    res.status(200).json(updatedCategory)
  } else {
    res.status(404)
    throw new Error('Category not found')
  }
})


export {
  getCategories,
  getCategoryById,
  deleteCategory,
  createCategory,
  updateCategory,
}
