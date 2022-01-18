import { configureStore } from '@reduxjs/toolkit';
import carsSlice from './carsInfo/carsSlice';

export default configureStore({
  reducer: {
    carsData: carsSlice,
  },
});
