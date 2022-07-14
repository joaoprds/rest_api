const Papers = require('../models/papers')

exports.getAll = async (req, res, next) => {
    try {
        const ALL = await Papers.findAll();
        return res.status(200).json(ALL);
    } catch (error) {
        return res.status(500).json(error);
    }
}