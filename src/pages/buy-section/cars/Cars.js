import React, { useEffect, useState } from 'react';
import SingleCar from './SingleCar';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchCars } from '../../../redux/carsInfo/carsSlice';

function Cars() {
  // const cars = useSelector((state) => state.carsData.cars);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchCars(cars));
  // }, []);

  // const newListCars = cars.slice(10, 20);
  const [newListCars, setNewListCars] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api')
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  console.log(newListCars);

  return (
    <>
      {newListCars.map((car, i) => {
        return <SingleCar key={i} {...car} />;
      })}
    </>
  );
}

export default Cars;
