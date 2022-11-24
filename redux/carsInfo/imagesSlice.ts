import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

type State = {
  imageSource: string;
  carImages: string[];
};

const initialState: State = { imageSource: '', carImages: [] };

export const getCarImages = createAsyncThunk('cars/getCarImages', async () => {
  try {
    const response = await fetch('https://rumrumcars.herokuapp.com/api/cars/images');
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
});

const imagesSlice = createSlice({
  name: 'imagesSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCarImages.fulfilled, (state, action) => {
        state.carImages = action.payload;
      })
      .addCase(getCarImages.rejected, (state, action) => {
        // @ts-ignore
        state.carImages = action.payload;
      });
  },
});

export default imagesSlice.reducer;
