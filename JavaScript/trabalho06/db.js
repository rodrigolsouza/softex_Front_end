const Sequelize = require('sequelize');

    const sequelize = new Sequelize({
    username: 'root',
    password: 'root',
    database: 'produto_bd',
    port:'3306',
    host: 'localhost',
    dialect: 'mysql',
    });

module.exports = sequelize;