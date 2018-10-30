const express = require('express');
const router = express.Router();

const eventController = require('../controllers/events')

router.get('/',eventController.get_all_events)

router.get('/:id',eventController.get_one_event)

router.post('/',eventController.add_event)

router.patch('/:id',eventController.update_event)

router.delete('/:id',eventController.delete_event)

module.exports = router;
