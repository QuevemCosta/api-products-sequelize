const { response } = require('express');
const express = require('express');
const app = express();
const conection = require('./src/model/conection').default;
const port = 3000;
const routes = require('./src/routes');
const bodyParser = require('body-parser');

conection
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(routes)



app.listen(port, ()=>{
    console.log(`Servidor rodando em http://localhost:${port}`)
})
