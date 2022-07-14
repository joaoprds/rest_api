const sequelize = require('sequelize');
const db = require('../util/database');

const Papers = db.define('papers', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false
    },
    picture: {
        type: Sequelize.STRING,
        allowNull: false
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    summary: {
        type: Sequelize.STRING,
        allowNull: false
    },
    firstparagraph: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.STRING,
        allowNull: false

    }
})

module.exports = Papers