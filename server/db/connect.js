const mongoose = require('mongoose');

const connectDB = (url) => {
  return mongoose.connect(url, (err) => {
    if (err) throw err;
    console.log('Connected to MongoDB!');
  });
};

module.exports = connectDB;
