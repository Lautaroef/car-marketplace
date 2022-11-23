import React from 'react';
import { useAppDispatch } from 'redux/hooks';
import {
  saveMakers,
  saveYears,
  sortBySelectedOption,
} from '../../../redux/carsInfo/filtersSlice';
import SingleCar from './SingleCar';
import PaginationLink from '../pagination';
import SortByOption from '../filters/SortByOption';
import Button from '@mui/material/Button';
import Loading from '../../../components/other-components/loading-feedback/LoadingSkeleton';
import noFilterImg from '../../../images/logos/noFilter.svg';
import filterImage from '../../../images/logos/filterSvg.svg';
import noCarsImage from '../../../images/logos/noCarsImage.svg';

type Props = {
  cars: CarProps[];
  nbCars: number;
  isLoading: boolean;
  setOpenFilterModal: React.Dispatch<React.SetStateAction<boolean>>;
};

function Cars({ cars, nbCars, isLoading, setOpenFilterModal }: Props) {
  const dispatch = useAppDispatch();

  const handleClearFilter = () => {
    // TODO: Optimize this queries
    dispatch(sortBySelectedOption('price'));
    dispatch(saveMakers(''));
    dispatch(saveYears([1995, 2022]));
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className='result-details'>
            <div>
              <small>
                1-{nbCars} of {264} Results
              </small>
              <h4>Your Search Results</h4>
            </div>
            <div className='sort-and-filters'>
              <Button className='select-filters' onClick={() => setOpenFilterModal(true)}>
                Select Filters
                <img src={filterImage} alt='Filter Image' />
              </Button>
              <Button onClick={handleClearFilter}>
                Clear filters <img src={noFilterImg} alt='No filter' />
              </Button>
              <SortByOption />
            </div>
          </div>
          <div className='cars-list'>
            {cars.length === 0 ? (
              <div className='no-cars-available'>
                <div>
                  <i className='fa fa-circle-info'></i>
                  <div style={{ fontWeight: '800' }}>
                    We couldn't find cars that match your search criteria.
                  </div>
                  <div>Try changing your search criteria or remove filters.</div>
                </div>
                <img src={noCarsImage} alt='No Image Available' />
              </div>
            ) : (
              <>
                {cars.map((car, i) => {
                  return <SingleCar key={i} {...car} />;
                })}
              </>
            )}
          </div>
          <PaginationLink />
        </>
      )}
    </>
  );
}

export default Cars;
