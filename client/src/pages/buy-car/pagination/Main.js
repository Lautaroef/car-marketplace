import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectedPage } from '../../../redux/carsInfo/filtersSlice';
// Components
import Pagination from '@mui/material/Pagination';

function Main() {
  const currentPage = useSelector((state) => state.filtersValues.currentPage);
  const dispatch = useDispatch();

  const handlePagination = (e, value) => {
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
