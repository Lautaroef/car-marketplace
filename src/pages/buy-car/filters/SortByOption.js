import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sortBySelectedOption } from '../../../redux/carsInfo/filtersSlice';
// Components
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import BootstrapInput from '../../../components/other-components/BootstrapInput';

function SortByOption() {
  const selectedOption = useSelector(
    (state) => state.filtersValues.sortBySelectedOption
  );
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.value) {
      dispatch(sortBySelectedOption(e.target.value));
    }
  };

  return (
    <Select
      id='select-sort'
      labelId='select-sort'
      value={selectedOption}
      onChange={handleChange}
      input={<BootstrapInput />}
    >
      <MenuItem value='Relevance'>
        <small>Relevance</small>
      </MenuItem>
      <MenuItem value={'price'}>Price - Lowest</MenuItem>
      <MenuItem value={'-price'}>Price - Highest</MenuItem>
      <MenuItem value={'year'}>Year - Oldest</MenuItem>
      <MenuItem value={'-year'}>Year - Newest</MenuItem>
    </Select>
  );
}

export default SortByOption;
