import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = { imageSource: '', carImages: [] };

export const getCarImages = createAsyncThunk('cars/getCarImages', async () => {
  try {
    const response = await fetch('http://localhost:3001/api/cars/images');
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
});

const imagesSlice = createSlice({
  name: 'imagesSlice',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCarImages.fulfilled, (state, action) => {
        state.carImages = action.payload;
      })
      .addCase(getCarImages.rejected, (state, action) => {
        state.carImages = action.payload;
      });
  },
});

export default imagesSlice.reducer;
