const { response } = require('express');
const Products = require('../model/Products');

module.exports = {
   async index(request, response){
    const page = parseInt(request.query.page);

    const limit = 20;

    const data = await Products.findAll({
        limit: limit,
        offset: page
    });
      console.log(data)
      return response.json({data, page, limit});
    },

    async create(request, response){
      try{
        const {name, description,categoryId, cashValue,termValue,image} = request.body

        const product = await Products.create({name, description, categoryId, cashValue, termValue, image})
 
        return response.status(200).send(product);

      }catch(err){
        return response.status(400).send({error:err})
      }
    }
}