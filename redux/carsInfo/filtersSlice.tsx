import { createSlice } from '@reduxjs/toolkit';
import { minimumYear, currentYear } from '../../pages/buy-car/filters/schema';

type Props = {
  searchValue: string;
  sidebarFilters: {
    years: [number, number];
    makers: string;
    price: [number, number];
    horsepowers: [number, number];
  };
  sortBySelectedOption: string;
  currentPage: number;
};

const initialState: Props = {
  searchValue: '',
  sidebarFilters: {
    years: [minimumYear, currentYear],
    makers: '',
    price: [0, 5_000_000],
    horsepowers: [50, 900],
  },
  sortBySelectedOption: '-year',
  currentPage: 1,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    // Search input and Sort input
    headerInputValue: (state, action) => {
      state.searchValue = action.payload;
    },
    sortBySelectedOption: (state, action) => {
      state.sortBySelectedOption = action.payload;
    },
    // Sidebar filters
    saveYears: ({ sidebarFilters }, action) => {
      sidebarFilters.years[0] = action.payload[0];
      sidebarFilters.years[1] = action.payload[1];
    },
    saveMakers: ({ sidebarFilters }, action) => {
      sidebarFilters.makers = action.payload;
    },
    savePrices: ({ sidebarFilters }, action) => {
      sidebarFilters.price[0] = action.payload[0];
      sidebarFilters.price[1] = action.payload[1];
    },
    saveHorsepowers: ({ sidebarFilters }, action) => {
      sidebarFilters.horsepowers[0] = action.payload[0];
      sidebarFilters.horsepowers[1] = action.payload[1];
    },
    // Pagination
    selectedPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const {
  headerInputValue,
  sortBySelectedOption,
  saveYears,
  saveMakers,
  savePrices,
  saveHorsepowers,
  selectedPage,
} = filtersSlice.actions;
export default filtersSlice.reducer;
