const express = require('express');
const router = express.Router();
const  ProductController = require('./controller/ProductController');
const  CategoriesController = require('./controller/CategoriesController');

//VIEW
//Home
router.get('/', function(rec, res){
	res.sendFile(__dirname + '/view/pages/home/index.html')
});

//Product
router.get('/novo/produto', function(rec, res){
	res.sendFile(__dirname + '/view/pages/novo-produto/index.html')
});
router.get('/public/novo/produto', function(rec, res){
	res.sendFile(__dirname + '/view/pages/novo-produto/main.js')
});


//Category
router.get('/nova/categoria', function(rec, res){
	res.sendFile(__dirname + '/view/pages/nova-categoria/index.html')
});
router.get('/public/nova/categoria', function(rec, res){
	res.sendFile(__dirname + '/view/pages/nova-categoria/main.js')
});

//CSS
router.get('/public/style', function(rec, res){
	res.sendFile(__dirname + '/public/global-style.css')
});
//FIM VEW

//API 
router.get('/api/products',ProductController.index);
router.post('/api/product',ProductController.create);

router.get('/api/categories',CategoriesController.index);
router.post('/api/category',CategoriesController.create);



module.exports = router;