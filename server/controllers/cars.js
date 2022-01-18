const Car = require('../models/car');

const getAllCars = async (req, res) => {
  const { make, model, numericFilters, sort, page = 1, limit = 15 } = req.query;

  const queryObject = {};
  if (make) {
    queryObject.make = make;
  }
  if (model) {
    queryObject.model = { $regex: model, $options: 'i' };
  }
  if (numericFilters) {
    const operatorMap = {
      '>': '$gt',
      '>=': '$gte',
      '=': '$eq',
      '<': '$lt',
      '<=': '$lte',
    };
    const regEx = /\b(<|>|>=|=|<=)\b/g;
    let filters = numericFilters.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );
    const options = ['price', 'year', 'horsepower'];
    filters = filters.split(' ').forEach((item) => {
      const [field, operator, value] = item.split('-');
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) };
      }
    });
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

  // Pagination system using .page() and .skip()
  const skip = (Number(page) - 1) * Number(limit);

  result = result.skip(skip).limit(Number(limit));

  const cars = await result;
  res.status(200).json({ nbCars: cars.length, cars });
};

const getCar = async (req, res) => {
  const { id: carID } = req.params;
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

const buyACar = async (req, res) => {
  const { id: carID } = req.params;

  const car = await Car.findOneAndDelete({ _id: carID });
  if (!car) {
    res.status(404).json({
      success: false,
      msg: `The id provided (${carID}) does not match with any of the existing cars`,
    });
  }

  res.status(200).json({ success: true, car });
};

const sellACar = async (req, res) => {
  const car = await Car.create(req.body);
  res.status(201).json({ success: true, car });
};

module.exports = { getAllCars, getCar, buyACar, sellACar };

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
