const express = require('express');
const router = express.Router();
const {
  getAllCars,
  getSingleCar,
  postCar,
  deleteCar,
  getCarImages,
} = require('../controllers/cars');

router.route('/').get(getAllCars).post(postCar);
router.route('/car/:carID').get(getSingleCar).delete(deleteCar);
// Car images
router.get('/images', getCarImages);

module.exports = router;
