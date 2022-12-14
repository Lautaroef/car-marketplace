import Image from 'next/image';
import { useAppDispatch } from 'redux/hooks';
import { saveMakers, saveYears, sortBySelectedOption } from 'redux/carsInfo/filtersSlice';
import SingleCar from './SingleCar';
import PaginationLink from '../pagination';
import SortByOption from '../filters/SortByOption';
import Button from '@mui/material/Button';
import noFilterImg from 'images/logos/noFilter.svg';
import filterImage from 'images/logos/filterSvg.svg';
import noCarsImage from 'images/logos/noCarsImage.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

type Props = {
  cars: Car[];
  nbCars: number;
  setOpenFilterModal: React.Dispatch<React.SetStateAction<boolean>>;
};

function Cars({ cars, nbCars, setOpenFilterModal }: Props) {
  const dispatch = useAppDispatch();

  const handleClearFilter = () => {
    // TODO: Optimize this queries
    dispatch(sortBySelectedOption('price'));
    dispatch(saveMakers(''));
    dispatch(saveYears([1995, 2022]));
  };

  return (
    <>
      <div className='result-details'>
        <div>
          <small>
            1-{25} of {nbCars} Results
          </small>
          <h4>Your Search Results</h4>
        </div>
        <div className='sort-and-filters'>
          <Button className='select-filters' onClick={() => setOpenFilterModal(true)}>
            Select Filters
            <Image src={filterImage} alt='Filter Image' />
          </Button>
          <Button onClick={handleClearFilter} className='clear-filters'>
            Clear filters <Image src={noFilterImg} alt='No filter' />
          </Button>
          <SortByOption />
        </div>
      </div>
      <div className='cars-list'>
        {cars.length === 0 ? (
          <div className='no-cars-available'>
            <div>
              <FontAwesomeIcon icon={faCircleInfo} />
              <div style={{ fontWeight: '800' }}>
                We couldn&apos;t find cars that match your search criteria.
              </div>
              <div>Try changing your search criteria or remove filters.</div>
            </div>
            <Image src={noCarsImage} alt='No Image Available' />
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
  );
}

export default Cars;
