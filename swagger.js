const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./routes/*.js']  // Adjusted to include all .js files in the routes directory

swaggerAutogen(outputFile, endpointsFiles)
