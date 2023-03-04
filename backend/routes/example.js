const express = require('express');
const router = express.Router();

// import controllers
const {getExample} = require('../controllers/example')

// import middlewares

// api routes
router.get('/example', getExample);

module.exports = router;