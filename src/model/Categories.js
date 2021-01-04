const db = require('./db/db');

const Category = db.sequelize.define('categories',{
    name: {
        type:db.Sequelize.STRING
    }

});

module.exports = Category;