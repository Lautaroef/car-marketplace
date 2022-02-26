import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  useGetCarMutation,
  useDeleteCarMutation,
} from '../../redux/carsInfo/carsApi';
//Components
import Car from './car/Main';
import Paypal from './paypal/Main';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

function Main() {
  const [showPaymentMethods, setShowPaymentMethods] = useState(false);
  const [getCar, { data: { car = {} } = {} }] = useGetCarMutation();
  const [deleteCar, { isLoading, isSuccess, isError }] = useDeleteCarMutation();
  const { carID } = useParams();

  useEffect(() => {
    getCar(carID);
  }, []);
  const handleBuyCar = () => {
    // setShowPaymentMethods(!showPaymentMethods);
    deleteCar(carID);
  };

  return (
    <section>
      {isLoading ? (
        <h1>Loading car</h1>
      ) : (
        <>
          <Car
            carInfo={car}
            isError={isError}
            isSuccess={isSuccess}
            isLoading={isLoading}
            handleBuyCar={handleBuyCar}
            setShowPaymentMethods={setShowPaymentMethods}
          />
          <Button
            disableElevation
            variant='contained'
            className='buy-button'
            disabled={isLoading}
            onClick={handleBuyCar}
          >
            {isLoading ? <CircularProgress size='1.5rem' /> : 'Buy car'}
          </Button>

          {/* <Paypal
            carInfo={car}
            showPaymentMethods={showPaymentMethods}
            handleBuyCar={handleBuyCar}
            isLoading={isLoading}
          /> */}
        </>
      )}
    </section>
  );
}

export default Main;
