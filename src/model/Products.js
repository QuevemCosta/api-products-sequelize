const db = require('./db/db');

const Product = db.sequelize.define('products',{
    name: {
        type:db.Sequelize.STRING
    },
    description: {
        type:db.Sequelize.TEXT
    },
    categoryId:{
        type: db.Sequelize.INTEGER,
        allowNull: false,
        references: {         // User belongsTo Company 1:1
          model: 'categories',
          key: 'id'
        }
    },
    cashValue:{
        type: db.Sequelize.FLOAT
    },
    termValue:{
        type: db.Sequelize.FLOAT
    },
    image: {
        type: db.Sequelize.TEXT
    }

});

module.exports = Product