import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useGetCarMutation, useDeleteCarMutation } from 'redux/carsInfo/carsApi';
import Car from 'components/single-car/car/Main';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

function Main() {
  const [showPaymentMethods, setShowPaymentMethods] = useState<boolean>(false);
  const [getCar, { data: { car = {} } = {} }] = useGetCarMutation();
  const [deleteCar, { isLoading, isSuccess, isError }] = useDeleteCarMutation();
  const { carID } = useRouter().query;

  useEffect(() => {
    getCar(carID);
  }, []);
  const handleBuyCar = () => {
    setShowPaymentMethods(!showPaymentMethods);
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
            showPaymentMethods={showPaymentMethods}
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
        </>
      )}
    </section>
  );
}

export default Main;
