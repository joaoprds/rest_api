const Sequelize = require('sequelize');

const sequelize = new sequelize(
    process.env.PGDATABASE,
    process.env.PGUSER,
    process.env.PGPASSWORD,
    {
        host: process.env.PGHOST,
        dialect: 'postgres'
    }
)

module.exports = sequelize
