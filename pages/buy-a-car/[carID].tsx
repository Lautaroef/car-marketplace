import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDeleteCarMutation } from 'redux/carsInfo/carsApi';
import Car from 'components/single-car/car/Main';
import { Button, CircularProgress } from '@mui/material';

// getStaticPaths
export async function getStaticPaths() {
  const res = await fetch('https://rumrum-cars.vercel.app/api/cars'); // https://rumrum-cars.vercel.app/api/cars
  const data = await res.json();

  const paths = data.cars.map((car: Car) => ({
    params: { carID: car._id },
  }));

  return {
    paths,
    fallback: true, // can also be true or 'blocking'
  };
}

// getStaticProps
export async function getStaticProps(context: any) {
  const res = await fetch(
    `https://rumrum-cars.vercel.app/api/cars/${context.params.carID}`
  ); // https://rumrum-cars.vercel.app/api/cars/${context.params.carID}
  const data = await res.json();

  return {
    props: {
      car: data.car,
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
