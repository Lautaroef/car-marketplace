import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDeleteCarMutation } from 'redux/carsInfo/carsApi';
import Car from 'components/single-car/car/Main';
import { Button, CircularProgress } from '@mui/material';

export async function getStaticPaths({ req }: any) {
  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const baseUrl = req ? `${protocol}://${req.headers.host}` : '';

  const res = await fetch('/api/cars');
  const data = await res.json();

  const paths = data.cars.map((car: Car) => ({
    params: { carID: car._id },
  }));

  return {
    paths,
    fallback: 'blocking', // can be true, false or 'blocking'
  };
}

export async function getStaticProps({ req, params }: any) {
  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const baseUrl = req ? `${protocol}://${req.headers.host}` : '';

  const res = await fetch(`/api/cars/${params.carID}`);
  const data = await res.json();

  return {
    props: {
      car: data.car,
      success: data.success,
    },
  };
}

function Main({ car }: { car: Car }) {
  const [showPaymentMethods, setShowPaymentMethods] = useState<boolean>(false);
  const [deleteCar, { isLoading, isSuccess, isError }] = useDeleteCarMutation();
  const router = useRouter();
  const carID = router.query.carID;

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
          {/* Delete car 👇 */}
          {/* <Button
            disableElevation
            variant='contained'
            className='buy-button'
            disabled={isLoading}
            onClick={handleBuyCar}
          >
            {isLoading ? <CircularProgress size='1.5rem' /> : 'Buy car'}
          </Button> */}
        </>
      )}
    </section>
  );
}

export default Main;
