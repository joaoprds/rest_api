const controller = require('../controllers/author')
const router = require('express').Router()

//Begging of the CRUD

router
    .get('/author', controller.getAll)
    .get('/author/:id', controller.getOne)
    .post('/author', controller.createOne)
    .put('/author/:id', controller.updateOne)
    .delete('/author/:id', controller.deleteOne)

module.exports = router;
