const express = require('express');
const router = express.Router();
const  ProductController = require('./controller/ProductController');
const  CategoriesController = require('./controller/CategoriesController');

router.get('/api/products',ProductController.index);
router.post('/api/product',ProductController.create);

router.get('/api/categories',CategoriesController.index);
router.post('/api/category',CategoriesController.create);



module.exports = router;