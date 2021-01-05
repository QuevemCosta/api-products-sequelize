const db = require('./db/db');

const Product = db.sequelize.define('products',{
    name: {
        type:db.Sequelize.STRING
    },
    description: {
        type:db.Sequelize.TEXT,
        validate:{
            notEmpty:{
                msg:"É presizo definir uma descrição para o Produto"
            },
            len:{
                args:[20,500],
                msg:"O nome de uma categoria deve ter entre 20 d 500 caracteres"
            }
        },
    },
    categoryId:{
        type: db.Sequelize.INTEGER,
        allowNull: false,
        validate:{
            notEmpty:{
                msg:"É presizo definir uma Categoria"
            }
        },
        references: {         // User belongsTo Company 1:1
          model: 'categories',
          key: 'id'
        }
    },
    cashValue:{
        type: db.Sequelize.FLOAT,
        validate:{
            notEmpty:{
                msg:"Valor invalido"
            }
        },
    },
    termValue:{
        type: db.Sequelize.FLOAT,
        validate:{
            notEmpty:{
                msg:"Valor invalido"
            }
        },
    },
    image: {
        type: db.Sequelize.TEXT,
        validate:{
            notEmpty:{
                msg:"Selecione uma imagem"
            }
        },
    }

});

module.exports = Product