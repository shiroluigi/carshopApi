const express = require('express')
const router = express.Router()
const { getRequest } = require('../controllers/controllerFunctions')

// root: /products

router.route('/').get(getRequest)


module.exports = router