const express = require('express');
const router = express.Router();

const eventController = require('../controllers/events')

router.get('/',eventController.get_all_events)

module.exports = router
