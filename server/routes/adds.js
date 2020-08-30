var express = require('express');
var router = express.Router();
var data = require('../data/address')
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

/* GET home page. */
router.get('/', function(req, res, next) {
  if(data.address!=undefined)
    res.status(200).send(data);
  else
    res.status(400).send("No data found");
  //res.render('index', { title: 'Express' });
});

module.exports = router;  
