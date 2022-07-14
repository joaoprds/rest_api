const controller = require('../controllers/author')
const router = require('express').Router()

router.get('/version', controller.version)

module.exports = router;
