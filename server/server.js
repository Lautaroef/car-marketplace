// express - db
require('express-async-errors');
const express = require('express');
const app = express();
const cors = require('cors');
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const connectDB = require('./db/connect');
const buyACarRoute = require('./routes/cars');
require('dotenv').config();

app.use(cors({ origin: 'https://rumrumcars-a9207.web.app'}));

app.use('/public', express.static(__dirname + '../../public'));

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// buy a car route
app.use('/api/cars', buyACarRoute);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3001;

const start = async () => {
  try {
    app.listen(port, console.log(`Server listening on server ${port}...`));
    await connectDB(process.env.MONGO_URI);
  } catch (error) {
    console.log(error);
  }
};
start();
