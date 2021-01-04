const {sequelize} =  require('../model/db/db')
const conection =  sequelize.authenticate()
    .then(()=>{
        console.log("Sucesso na conexão com a base de dados");
        
    }).catch((erro)=>{
        console.log(erro)
    });
module.exports = conection;