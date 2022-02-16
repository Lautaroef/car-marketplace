const mongoose = require('mongoose');

const connectDB = (url) => {
  return mongoose.connect(url, (err) => {
    if (err) throw console.error("Couldn't connect to MongoDB:" + first);
    console.log('Connected to MongoDB!');
  });
};

module.exports = connectDB;
