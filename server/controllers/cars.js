const Car = require('../models/car');
const { cloudinary } = require('../utils/cloudinary');

const getAllCars = async (req, res) => {
  const { make, model, sort, page = 1, limit = 25 } = req.query;
  const infinite = 5_000_000;
  const currentYear = new Date().getFullYear();
  const {
    minYear = 0,
    maxYear = currentYear,
    minPrice = 0,
    maxPrice = infinite,
    minHorsepower = 0,
    maxHorsepower = infinite,
  } = req.query;

  const queryObject = {};
  if (make) {
    // const arrOfMakers = make.split(',');
    // queryObject.make = { $in: arrOfMakers };
    queryObject.make = { $regex: make, $options: 'i' };
  }
  if (model) {
    queryObject.model = { $regex: model, $options: 'i' };
  }
  if (minYear && maxYear) {
    queryObject.year = { $gte: minYear, $lte: maxYear };
  }
  if (minPrice && maxPrice) {
    queryObject.price = { $gte: minPrice, $lte: maxPrice };
  }
  if (minHorsepower && maxHorsepower) {
    queryObject.horsepower = { $gte: minHorsepower, $lte: maxHorsepower };
  }

  // https://mongoosejs.com/docs/queries.html
  let result = Car.find(queryObject);
  console.log(queryObject);

  // https://mongoosejs.com/docs/api.html#query_Query-sort
  if (sort) {
    result = result.sort(sort);
  } else {
    result = result.sort('price');
  }

  // Pagination system using .skip() and .limit()
  const skip = (Number(page) - 1) * Number(limit);

  result = result.skip(skip).limit(Number(limit));

  const cars = await result;

  res.status(200).json({
    nbCars: cars.length,
    cars,
  });
};

const getSingleCar = async (req, res) => {
  const { carID } = req.params;
  console.log(req.params);

  const car = await Car.findOne({ _id: carID });
  if (!car) {
    res.status(404).json({
      success: false,
      msg: `The id provided (${carID}) does not match with any of the existing cars`,
    });
  }

  res.status(200).json({ success: true, car });
};

const deleteCar = async (req, res) => {
  const { carID } = req.params;

  const car = await Car.findOneAndDelete({ _id: carID });
  if (!car) {
    res.status(404).json({
      success: false,
      msg: `The id provided (${carID}) does not match with any of the existing cars`,
    });
  }

  res.status(200).json({ success: true, car });
};

const postCar = async (req, res) => {
  try {
    const base64EncodedImage = req.body.img_url;

    const uploadedResponse = await cloudinary.uploader.upload(
      base64EncodedImage,
      { upload_preset: 'cars_images' }
    );
    console.log(uploadedResponse);

    const parsedBody = req.body;
    parsedBody.img_url = uploadedResponse.secure_url;

    // public_id: uploadedResponse.public_id,

    const car = await Car.create(parsedBody);
    res.status(201).json({ success: true, car });
  } catch (error) {
    console.log(error);
    res.status(201).json({ success: false, error: error });
  }
};

// Handle car images requests
const getCarImages = async (req, res) => {
  const { resources } = await cloudinary.search
    .expression('folder:cars_images')
    .sort_by('public_id', 'desc')
    .max_results(25)
    .execute();

  // const publicIds = resources.map((file) => file.public_id);
  const imagesURLs = resources.map((file) => file.secure_url);

  res.status(200).send(imagesURLs);
};

module.exports = {
  getAllCars,
  getSingleCar,
  deleteCar,
  postCar,
  getCarImages,
};

/* 
Person.
  find({ occupation: /host/ }).
  where('name.last').equals('Ghost').
  where('age').gt(17).lt(66).
  where('likes').in(['vaporizing', 'talking']).
  limit(10).
  sort('-occupation').
  select('name occupation').
  exec(callback);
*/
