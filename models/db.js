const Sequelize = require('sequelize');

const sequelize = new Sequelize('rvoiclas', 'rvoiclas', 'alxbnWxyGYEB2i2Ltq9-SK5968C1EGvM', {
    host: 'babar.db.elephantsql.com',
    dialect: 'postgres'
  });

sequelize.authenticate()
.then(function(){
    console.log("Conexão com o banco de dados realizado com sucesso!")
}).catch(function(){
    console.log("Erro conexão com banco de dados não realizado com sucesso!")
});

module.exports = sequelize;