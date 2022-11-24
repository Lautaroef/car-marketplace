import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDeleteCarMutation } from 'redux/carsInfo/carsApi';
import Car from 'components/single-car/car/Main';
import { getCar, getCars } from 'server/controllers/cars';
import { Button, CircularProgress } from '@mui/material';

export async function getStaticProps({ params }: any) {
  const car = await getCar(params.carID);

  return {
    props: {
      car: JSON.parse(JSON.stringify(car)),
    },
  };
}

export async function getStaticPaths() {
  const cars = await getCars();

  const paths = cars.map((car: Car) => ({
    params: { carID: car._id.toString() },
  }));

  return {
    paths,
    fallback: true, // "blocking"
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
            car={car}
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
