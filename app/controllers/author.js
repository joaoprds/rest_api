const Author = require('../models/author')

exports.getAll = async (req, res, next) => {
    try {
        const ALL = await Author.findAll();
        return res.status(200).json(ALL);
    } catch (error) {
        return res.status(500).json(error);
    }
}

exports.getOne = async (req, res, next) => {
    try {
      const author = await Author.findByPk(req.params.id);
      return res.status(200).json(author);
    } catch (error) {
      return res.status(500).json(error);
    }
  };
  
  exports.createOne = async (req, res, next) => {
    try {
      const AUTHOR_MODEL = {
        author: req.body.author,
        picture: req.body.picture,
        category: req.body.category,
        title: req.body.title,
        summary: req.body.summary,
      };
  
      try {
        const author = await Author.create(AUTHOR_MODEL);
        console.log('author created');
        return res.status(201).json(author);
      } catch (error) {
        return res.status(500).json(error);
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  };
  
  exports.updateOne = async (req, res, next) => {
    try {
      const AUTHOR_MODEL = {
        author: req.body.author,
        picture: req.body.picture,
        category: req.body.category,
        title: req.body.title,
        summary: req.body.summary,
      };
  
      try {
        const author = await Author.update(AUTHOR_MODEL, { where: { id: req.params.id } });
        return res.status(200).json(author);
      } catch (error) {}
    } catch (error) {
      return res.status(500).json(error);
    }
  };
  
  exports.deleteOne = async (req, res, next) => {
    try {
      const author = await Author.destroy({ where: { id: req.params.id } });
      return res.status(200).json(author);
    } catch (error) {
      return res.status(500).json(error);
    }
  };