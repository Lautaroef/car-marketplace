import mongoose from 'mongoose';
import { makersArray, yearsArray } from './other-schemas';

// Define how i wanna receive the info whenever a user
// want to make a CRUD operation
const carsSchema = new mongoose.Schema({
  // Build a validation system for every type info
  make: {
    type: String,
    enum: makersArray,
    trim: true,
    required: [true, "Please type the car's make"],
  },
  model: {
    type: String,
    trim: true,
    required: [true, "Please type the car's model"],
  },
  year: {
    type: Number,
    enum: yearsArray,
    required: [true, "Please write the car's manufacturing year"],
  },
  price: {
    type: Number,
    required: [true, 'Please write the price you want to sell your car'],
  },
  horsepower: {
    type: Number,
    max: 1622,
    required: [true, 'Please provide horsepowers or approximately'],
  },
  img_url: {
    type: String,
    required: [true, 'Please provide a car image'],
  },
});

// Create a model
const Car = mongoose.models.Car || mongoose.model('Car', carsSchema);

export default Car;
