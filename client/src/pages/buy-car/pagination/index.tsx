import React from 'react';
import { selectedPage } from '../../../redux/carsInfo/filtersSlice';
import Pagination from '@mui/material/Pagination';
import { useAppSelector, useAppDispatch } from 'redux/hooks';

function Main() {
  const currentPage = useAppSelector((state) => state.filtersValues.currentPage);
  const dispatch = useAppDispatch();

  const handlePagination = (e: React.ChangeEvent<unknown>, value: number) => {
    window.scrollTo(0, 0);
    dispatch(selectedPage(value));
  };

  return (
    <Pagination
      count={10}
      color='primary'
      page={currentPage}
      onChange={handlePagination}
    />
  );
}

export default Main;
