const Papers = require('../models/papers')

exports.getAll = async (req, res, next) => {
    try {
        const ALL = await Papers.findAll();
        return res.status(200).json(ALL);
    } catch (error) {
        return res.status(500).json(error);
    }
}

exports.getOne = async (req, res, next) => {
    try {
      const papers = await Papers.findByPk(req.params.id);
      return res.status(200).json(papers);
    } catch (error) {
      return res.status(500).json(error);
    }
  };
  
  exports.createOne = async (req, res, next) => {
    try {
      const PAPERS_MODEL = {
        author: req.body.author,
        picture: req.body.picture,
        category: req.body.category,
        title: req.body.title,
        summary: req.body.summary,
        firstparagraph: req.body.firstparagraph,
        body: req.body.body,
      };
  
      try {
        const papers = await Papers.create(PAPERS_MODEL);
        console.log('papers created');
        return res.status(201).json(papers);
      } catch (error) {
        return res.status(500).json(error);
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  };
  
  exports.updateOne = async (req, res, next) => {
    try {
      const PAPERS_MODEL = {
        author: req.body.author,
        picture: req.body.picture,
        category: req.body.category,
        title: req.body.title,
        summary: req.body.summary,
        firstparagraph: req.body.firstparagraph,
        body: req.body.body,
      };
  
      try {
        const papers = await Papers.update(PAPERS_MODEL, { where: { id: req.params.id } });
        return res.status(200).json(papers);
      } catch (error) {}
    } catch (error) {
      return res.status(500).json(error);
    }
  };
  
  exports.deleteOne = async (req, res, next) => {
    try {
      const papers = await Papers.destroy({ where: { id: req.params.id } });
      return res.status(200).json(papers);
    } catch (error) {
      return res.status(500).json(error);
    }
  };