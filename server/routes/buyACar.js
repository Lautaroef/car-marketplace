const express = require('express');
const router = express.Router();
const {
  getAllCars,
  sellACar,
  getCar,
  buyACar,
} = require('../controllers/cars');

router.route('/').get(getAllCars).post(sellACar);
router.route('/:id').get(getCar).delete(buyACar);

module.exports = router;
