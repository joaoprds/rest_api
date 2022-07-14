const controller = require('../controllers/papers')
const router = require('express').Router()

//Begging of the CRUD

router
    .get('/papers', controller.getAll)
    .get('/papers/:id', controller.getOne)
    .post('/papers', controller.createOne)
    .put('/papers/:id', controller.updateOne)
    .delete('/papers/:id', controller.deleteOne)

module.exports = router;
