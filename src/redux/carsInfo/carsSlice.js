import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  cars: [],
};
export const fetchCars = createAsyncThunk(
  'carsInfo/fetchCars',
  async (cars, thunk) => {
    return await fetch(`http://localhost:3001/api`).then((res) => res.json());
  }
);

const carsInfo = createSlice({
  name: 'carsInfo',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.cars = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.cars = action.payload;
      });
  },
});

export default carsInfo.reducer;
