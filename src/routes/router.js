const express = require('express')
const router = express.Router()

// CONTROLLER MODULE
const message = require('../controllers/message')

// ENDPOINT
router.get('/', message.helloworld)

/* Example for (message: testing)
    router.get('/testing', testMessage.testing)
*/

module.exports = router