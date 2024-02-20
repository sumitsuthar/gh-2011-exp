const express = require('express');

const validator = require('./log.validate');
const controller = require('./log.controller');
const router = express.Router();

router.post('/logs', validator.validate, controller.save);
router.get('/logs', validator.validate, controller.countDocuments);

module.exports = router;
