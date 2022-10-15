import React, { useState } from 'react';
import history from 'history/browser';
import { useAppSelector } from 'redux/hooks';
import { useGetCarsQuery } from '../../redux/carsInfo/carsApi';
import Cars from './cars/Main';
import Header from './search-bar/Main';
import LinearProgress from '@mui/material/LinearProgress';
// Filters
import Price from './filters/Price';
import Years from './filters/Years';
import Makers from './filters/Makers';
import HorsePower from './filters/HorsePower';
import ModalFilter from './filters/ModalFilter';

function Main() {
  const [openFilterModal, setOpenFilterModal] = useState<boolean>(false);
  const {
    searchValue,
    sidebarFilters: { years, makers, price, horsepowers },
    sortBySelectedOption,
    currentPage,
  } = useAppSelector((state) => state.filtersValues);

  let urlParams = {
    make: makers,
    model: searchValue,
    minYear: years[0].toString() || '0',
    maxYear: years[1].toString() || new Date().getFullYear().toString(),
    minPrice: price[0].toString() || '0',
    maxPrice: price[1].toString() || '5_000_000',
    minHorsepower: horsepowers[0].toString() || '0',
    maxHorsepower: horsepowers[1].toString() || '1000',
    sort: sortBySelectedOption,
    page: currentPage.toString(),
  };
  let searchParams = new URLSearchParams(urlParams);
  history.push({
    pathname: '/buy-a-car',
    search: searchParams.toString(),
  });
  const queryString = history.location.search;

  const {
    data: { cars = [], nbCars = 0 } = {},
    isLoading,
    isFetching,
  } = useGetCarsQuery(queryString);

  const LoadingProgressStyles = { width: '100%', height: '4px', mb: 2 };

  return (
    <>
      <div className='buy-a-car'>
        <div className='infinite-header'>
          <Header />
        </div>
        <div className='cars'>
          <main>
            {isFetching ? (
              <LinearProgress sx={LoadingProgressStyles} />
            ) : (
              <div style={{ ...LoadingProgressStyles, height: '20px' }}></div>
            )}
            <div className='results'>
              <form className='filters-sidebar'>
                <Years />
                <Makers />
                <Price />
                <HorsePower />
              </form>
              <div className='cars-sidebar'>
                <Cars
                  cars={cars}
                  nbCars={nbCars}
                  isLoading={isLoading}
                  setOpenFilterModal={setOpenFilterModal}
                />
              </div>
            </div>
          </main>
        </div>
      </div>
      {/* Filters modal */}
      <ModalFilter open={openFilterModal} setOpen={setOpenFilterModal} />
    </>
  );
}

export default Main;
