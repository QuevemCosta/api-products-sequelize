const Categories = require('../model/Categories');

module.exports = {
	async index(request, response){
		const page = parseInt(request.query.page);
		
		const limit = 20;

		const data =  await Categories.findAll({
			limit: limit,
			offset: page
		});
		
		console.log(response)
		return response.json({data, page, limit});
	},

	async create(request, response){
		const {name} = request.body;

		 const category = await Categories.create({name})
 

		return response.json({category});
	}

}