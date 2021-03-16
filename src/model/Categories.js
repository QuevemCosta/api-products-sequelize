const db = require('./db/db');

const Category = db.sequelize.define('categories',{
    name: {
        type:db.Sequelize.STRING,
        allowNull:false,
        validate:{
        	notEmpty:{
        		msg:"É presizo definir um nome para a Categoria"
        	},
        	len:{
        		args:[1,250],
        		msg:"O nome de uma categoria deve ter entre 1 d 30 caracteres"
        	},
    	}
	}
});
//Category.sync({force:true})
module.exports = Category;