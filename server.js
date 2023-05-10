require('dotenv').config();
const express = require('express');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const passport = require('passport');
const { sequelize } = require('./models/User');
const userRoutes = require('./routes/userRoutes');
const talkRoutes = require('./routes/talkRoutes');
const speakerRoutes = require('./routes/speakerRoutes');
const talkAttendeeRoutes = require('./routes/talkAttendeeRoutes');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger_output.json');

const http = require('http');
const setupSocket = require('./socket');
require('./passport');

const app = express();

//Socket connection
const server = http.createServer(app);
const io = setupSocket(server);

app.use(express.static('public'));

app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  store: new SequelizeStore({
    db: sequelize
  }),
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/auth', userRoutes);
app.use('/talks', talkRoutes);
app.use('/speakers', speakerRoutes);
app.use('/talkAttendees', talkAttendeeRoutes);

app.get('/', (req, res) => {
    res.json({message: 'Hello summit solution'})
})

// Added Swagger UI API Documentation
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Talk Chat API',
      version: '1.0.0',
      description: 'A simple Express Talk Chat API',
    }
  },
  apis: ['./routes/*.js'], // files containing annotations as above
};

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// const specs = swaggerJsdoc(options);
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));


// 404 handler
app.use((req, res, next) => {
  res.status(404).send('Not Found');
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    if (process.env.NODE_ENV === 'development') {
      res.status(500).send(err.stack);
    } else {
      res.status(500).send('Something went wrong.');
    }
});




const PORT = process.env.PORT || 3030;
app.listen(PORT, async () => {
    await sequelize.sync();
    console.log(`App is listening on port ${PORT}`);
});
