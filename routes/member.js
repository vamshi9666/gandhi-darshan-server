const express = require('express')

const router = express.Router()

const memberController = require('../controllers/member')

router.get('/',memberController.member_get_all)

router.patch('/:id',memberController.member_update)

router.get('/:id',memberController.member_get_one)

router.post('/',memberController.member_add)

router.delete('/:id',memberController.member_remove)

module.exports = router
