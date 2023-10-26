const Sequelize = require('sequelize');

const sequelize = new Sequelize('produto', 'manager', 'manager', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;