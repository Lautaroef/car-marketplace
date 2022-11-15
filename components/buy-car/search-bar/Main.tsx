import React, { useRef } from 'react';
import { useAppDispatch } from 'redux/hooks';
import { headerInputValue } from '../../../redux/carsInfo/filtersSlice';
import CarInput from './CarInput';
import ChipsArray from './ChipsArray';
import Paper from '@mui/material/Paper';

function Main() {
  const searchValueRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const handleSearchValue = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchValueRef.current) {
      const searchValue = searchValueRef.current.value;
      dispatch(headerInputValue(searchValue));
    }
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
