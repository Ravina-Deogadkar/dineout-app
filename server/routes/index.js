var express = require('express');
var router = express.Router();
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

/* GET home page. */
router.get('/', function(req, res, next) {
 
  res.send('respond with a resource');
});

module.exports = router;  
