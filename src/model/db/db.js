const { Model } = require('sequelize');
const Sequelize = require('sequelize');

const database = 'catalago_de_procutos';
const user = 'root';
const pass = '';

const sequelize = new Sequelize(database,user,pass,{
    host:'localhost',
    dialect:'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}

