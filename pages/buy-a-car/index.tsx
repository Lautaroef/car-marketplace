import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAppSelector } from 'redux/hooks';
import { useGetCarsQuery } from 'redux/carsInfo/carsApi';
import Cars from 'components/buy-a-car/cars/Main';
import Header from 'components/buy-a-car/search-bar/Main';
import LinearProgress from '@mui/material/LinearProgress';
// Filters
import Price from 'components/buy-a-car/filters/Price';
import Years from 'components/buy-a-car/filters/Years';
import Makers from 'components/buy-a-car/filters/Makers';
import HorsePower from 'components/buy-a-car/filters/HorsePower';
import ModalFilter from 'components/buy-a-car/filters/ModalFilter';

function Main() {
  const [openFilterModal, setOpenFilterModal] = useState<boolean>(false);
  const {
    searchValue,
    sidebarFilters: { years, makers, price, horsepowers },
    sortBySelectedOption,
    currentPage,
  } = useAppSelector((state) => state.filtersValues);
  const router = useRouter();
  const queries = router.query;

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
  // every time the url changes, update the query params
  // Tried making this but provokes an infinite loop
  /*
  useEffect(() => {
    router.push({
      pathname: '/buy-a-car',
      query: urlParams,
    });
   }, [urlParams]);  
  */
  useEffect(() => {
    if (queries.make) {
      urlParams.make = queries.make as string;
    }
    if (queries.model) {
      urlParams.model = queries.model as string;
    }
    if (queries.minYear) {
      urlParams.minYear = queries.minYear as string;
    }
    if (queries.maxYear) {
      urlParams.maxYear = queries.maxYear as string;
    }
    if (queries.minPrice) {
      urlParams.minPrice = queries.minPrice as string;
    }
    if (queries.maxPrice) {
      urlParams.maxPrice = queries.maxPrice as string;
    }
    if (queries.minHorsepower) {
      urlParams.minHorsepower = queries.minHorsepower as string;
    }
    if (queries.maxHorsepower) {
      urlParams.maxHorsepower = queries.maxHorsepower as string;
    }
    if (queries.sort) {
      urlParams.sort = queries.sort as string;
    }
    if (queries.page) {
      urlParams.page = queries.page as string;
    }
  }, [queries]);

  const {
    data: { cars = [], nbCars = 0 } = {},
    isLoading,
    isFetching,
  } = useGetCarsQuery(searchParams.toString());

  // history.push({
  //   pathname: '/buy-a-car',
  //   search: searchParams.toString(),
  // });

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
