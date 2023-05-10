// const swaggerAutogen = require('swagger-autogen')()

// const outputFile = './swagger_output.json'
// const endpointsFiles = ['./routes/*.js']  // Adjusted to include all .js files in the routes directory

// swaggerAutogen(outputFile, endpointsFiles)

const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = [
    './routes/userRoutes.js',
    './routes/talkRoutes.js',
    './routes/speakerRoutes.js',
    './routes/talkAttendeeRoutes.js'
]

swaggerAutogen(outputFile, endpointsFiles)


// const swaggerAutogen = require('swagger-autogen')()
// const glob = require('glob')

// const outputFile = './swagger_output.json'
// const endpointsFiles = glob.sync('./routes/**/*.js')

// swaggerAutogen(outputFile, endpointsFiles)



