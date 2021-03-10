const express = require('express');
const router = express.Router();
const  ProductController = require('./controller/ProductController');
const  CategoriesController = require('./controller/CategoriesController');

//VIEW
router.get('/', function(rec, res){
	res.sendFile(__dirname + '/view/pages/home/index.html')
});
router.get('/novo/produto', function(rec, res){
	res.sendFile(__dirname + '/view/pages/novo-produto/index.html')
});
router.get('/nova/categoria', function(rec, res){
	res.sendFile(__dirname + '/view/pages/nova-categoria/index.html')
});


//API 
router.get('/api/products',ProductController.index);
router.post('/api/product',ProductController.create);

router.get('/api/categories',CategoriesController.index);
router.post('/api/category',CategoriesController.create);



module.exports = router;