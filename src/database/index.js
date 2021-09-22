const { Sequelize } = require('sequelize'); //ORM para facilitar a iteração com banco de dados
const dbConfig = require('../config/database');//arquivo de configuração do banco de dados
const Pet = require('../models/Pet');//model de pet
const Tutor = require('../models/Tutor');//model de tutor

const connection = new Sequelize(dbConfig);//inicio uma nova connexão

//inicio uma nova conexão no model
Pet.init(connection);
Tutor.init(connection);

//inicio uma associação no model
Tutor.associate(connection.models);
Pet.associate(connection.models);

module.exports = connection;