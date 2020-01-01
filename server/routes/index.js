var express = require('express');
var router = express.Router();
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

/* GET home page. */
router.get('/', function(req, res, next) {
  const userOne = new User("Alexander", "fake@gmail.com");
  const userTwo = new User("Ryan", "fakeagain@gmail.com");
  res.json({ userOne, userTwo });
  //res.render('index', { title: 'Express' });
});

module.exports = router;  
