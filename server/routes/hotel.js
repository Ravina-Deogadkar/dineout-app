var express = require('express');
var router = express.Router();
var data = require('../data/hotel')
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const hotelController=require('../controller/hotelController');

/* GET home page. */
router.get('/', hotelController.getHotels);

module.exports = router;  
