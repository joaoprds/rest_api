const sequelize = require('sequelize');
const db = require('../util/database');

const Papers = db.define('papers', {
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
    },
    firstparagraph: {
        type: sequelize.STRING,
        allowNull: false
    },
    body: {
        type: sequelize.STRING,
        allowNull: false

    }
})

module.exports = Papers