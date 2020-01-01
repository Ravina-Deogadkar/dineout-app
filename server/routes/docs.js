var express = require('express');
var router = express.Router();
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger set up
const options = {
    swaggerDefinition: {
      openapi: "3.0.0",
      info: {
        title: "Time to document that Express API you built",
        version: "1.0.0",
        description:
          "A test project to understand how easy it is to document and Express API",
        license: {
          name: "MIT",
          url: "https://choosealicense.com/licenses/mit/"
        },
        contact: {
          name: "Swagger",
          url: "https://swagger.io",
          email: "Info@SmartBear.com"
        }
      },
      servers: [
        {
          url: "http://localhost:8030/api/v1"
        }
      ]
    },
    apis: []
  };
  const specs = swaggerJsdoc(options);
  router.use("/", swaggerUi.serve);
  router.get(
    "/",
    swaggerUi.setup(specs, {
      explorer: true
    })
  );

  module.exports = router; 