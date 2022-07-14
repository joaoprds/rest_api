const sequelize = require('sequelize');
const db = require('../util/database');

const Author = db.define('author', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    author: {
        type: sequelize.STRING,
        allowNull: false
    },
    picture: {
        type: sequelize.STRING,
        allowNull: false
    },
    category: {
        type: sequelize.STRING,
        allowNull: false
    },
    title: {
        type: sequelize.STRING,
        allowNull: false
    },
    summary: {
        type: sequelize.STRING,
        allowNull: false
    }
})

module.exports = Author