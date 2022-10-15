import React from 'react';
import history from 'history/browser';
import RightSideInfo from './RightSideInfo';
import ImageAndDetails from './ImageAndDetails';
// Alerts feedbacks
import ErrorAlert from '../../../components/other-components/loading-feedback/ErrorAlert';
import SuccessAlert from '../../../components/other-components/loading-feedback/SuccessAlert';

type Props = {
  carInfo: any;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  handleBuyCar: () => void;
  showPaymentMethods: boolean;
  setShowPaymentMethods: React.Dispatch<React.SetStateAction<boolean>>;
};

function Main({
  carInfo,
  handleBuyCar,
  showPaymentMethods,
  setShowPaymentMethods,
  isLoading,
  isSuccess,
  isError,
}: Props) {
  let { year, make, model } = carInfo;

  return (
    <>
      <div className='single-car-page'>
        <div className='title-price'>
          <button
            // variant='contained'
            onClick={() => history.back()}
          >
            <i className='fas fa-caret-left' /> Back to previous search
          </button>
          <h1>
            {year} {make} {model}
          </h1>
        </div>
        <main>
          <ImageAndDetails {...carInfo} />
          <RightSideInfo
            carInfo={carInfo}
            isLoading={isLoading}
            handleBuyCar={handleBuyCar}
            showPaymentMethods={showPaymentMethods}
            setShowPaymentMethods={setShowPaymentMethods}
          />
        </main>
      </div>
      {/* Alerts feedback */}
      <SuccessAlert isSuccess={isSuccess}>
        Your purchase for the car {make}, {model} was made successfully
      </SuccessAlert>
      <ErrorAlert isError={isError}>
        Something went wrong from the server, please try later
      </ErrorAlert>
    </>
  );
}

export default Main;
