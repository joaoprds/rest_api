const controller = require('../models/papers')
const router = require('express').Router()

//Begging of the CRUD

router
    .get('/author', controller.getAll)
    .get('/author/:id', controller.getOne)
    .get('/papers', controller.getAll)
    .get('/papers/:id', controller.getOne)
    .post('/author', controller.createOne)
    .post('/papers', controller.createOne)
    .put('/author/:id', controller.updateOne)
    .put('/papers/:id', controller.updateOne)
    .delete('/author/:id', controller.deleteOne)
    .delete('/papers/:id', controller.deleteOne)

module.exports = router;
