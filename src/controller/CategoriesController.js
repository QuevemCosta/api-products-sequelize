const Categories = require('../model/Categories');

module.exports = {
	async index(request, response){
		//const page = parseInt(request.query.page);
		
		//const limit = 20;

		const data =  await Categories.findAll({
			//limit: limit,
			//offset: page
		});
		
		console.log(response)
		return response.json({data});
	},

	async create(request, response){
		try{
			const {name} = request.body;

			 const category = await Categories.create({name})
	 

			return response.status(200).send(category);
		}catch(err){
			return response.status(400).send({error:err})
		}
	}

}