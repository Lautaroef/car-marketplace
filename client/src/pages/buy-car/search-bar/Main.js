import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { headerInputValue } from '../../../redux/carsInfo/filtersSlice';
// Components
import CarInput from './CarInput';
import ChipsArray from './ChipsArray';
import Paper from '@mui/material/Paper';

function Main() {
  const searchValueRef = useRef();
  const dispatch = useDispatch();

  const handleSearchValue = (e) => {
    e.preventDefault();
    dispatch(headerInputValue(searchValueRef.current.value));
  };

  return (
    <form onSubmit={handleSearchValue} className='header'>
      <small>Cars for Sale</small>
      <div className='title-marker'>
        <h3>Cars for Sale</h3>
        <i className='fas fa-map-marker-alt' />
      </div>
      <CarInput searchValueRef={searchValueRef} />
      <Paper component='ul'>
        <ChipsArray />
      </Paper>
    </form>
  );
}

export default Main;
