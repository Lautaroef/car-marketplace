import React from 'react';
import type { UseFormRegister, FieldValues, UseFormHandleSubmit } from 'react-hook-form';
import { usePostCarMutation } from '../../redux/carsInfo/carsApi';
import { minimumYear, currentYear, makersArray } from '../buy-car/filters/schema';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
// Alerts feedback
import ErrorAlert from '../../components/other-components/loading-feedback/ErrorAlert';
import SuccessAlert from '../../components/other-components/loading-feedback/SuccessAlert';
import LoadingScreen from '../../components/other-components/loading-feedback/LoadingScreen';

type Props = {
  carFormInfo: {
    [x: string]: any;
  };
  errors: {
    [x: string]: any;
  };
  base64EncodedImage: string;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  handleImageChange: (e: React.FormEvent<HTMLInputElement>) => void;
};

function CarForm({
  carFormInfo,
  handleImageChange,
  base64EncodedImage,
  ...useForm
}: Props) {
  const [postCar, { isLoading, isSuccess, isError }] = usePostCarMutation();
  const { register, errors, handleSubmit } = useForm;

  const onSubmit = () => {
    if (!base64EncodedImage) return;
    const { make, model, horsepower, year, price } = carFormInfo;

    const data = {
      make: make,
      model: model,
      year: Number(year),
      price: Number(price),
      horsepower: Number(horsepower),
      img_url: base64EncodedImage,
    };

    console.log(data);
    postCar(data);
  };

  return (
    <>
      <form method='POST' encType='multipart/form-data' onSubmit={handleSubmit(onSubmit)}>
        <InputLabel htmlFor='sell-make'>Make</InputLabel>
        <TextField
          select
          fullWidth
          id='sell-make'
          defaultValue=''
          placeholder='Ford'
          inputProps={register('make', {
            required: true,
          })}
          error={errors?.make ? true : false}
          helperText={errors?.make && 'Please select car maker'}
        >
          {makersArray.map((maker) => (
            <MenuItem key={maker} value={maker}>
              {maker}
            </MenuItem>
          ))}
        </TextField>
        <InputLabel htmlFor='sell-model'>Model</InputLabel>
        <TextField
          id='sell-model'
          defaultValue=''
          placeholder='Raptor'
          error={errors?.model ? true : false}
          helperText={errors?.model && "Please write the car's Model"}
          {...register('model', {
            required: true,
            minLength: 2,
          })}
        />
        <InputLabel htmlFor='sell-horsepower'>Horsepowers</InputLabel>
        <TextField
          type='number'
          defaultValue=''
          placeholder={'450'}
          id='sell-horsepower'
          {...register('horsepower', {
            required: true,
            max: 1100,
          })}
          error={errors?.horsepower ? true : false}
          helperText={
            errors?.horsepower && "Please provide the car's Horsepower, (max 1100)"
          }
        />
        <InputLabel htmlFor='sell-year'>Year</InputLabel>
        <TextField
          type='number'
          id='sell-year'
          defaultValue=''
          placeholder={'2021'}
          {...register('year', {
            required: true,
            min: minimumYear,
            max: currentYear + 1,
          })}
          error={errors?.year ? true : false}
          helperText={errors?.year && "Please write the manufacture's year of the car"}
        />
        <InputLabel htmlFor='sell-price'>Price</InputLabel>
        <TextField
          id='sell-price'
          defaultValue=''
          placeholder={'70000'}
          {...register('price', { required: true, min: 4000 })}
          error={errors?.price ? true : false}
          helperText={errors?.price && "Please write the car's value (>4000)"}
        />
        <InputLabel htmlFor='sell-image'>Image</InputLabel>
        <InputLabel className='img-input'>
          Select Car Image
          <input
            hidden
            type='file'
            id='img_url'
            {...register('img_url', {
              required: true,
            })}
            onInput={(e) => handleImageChange(e)}
          />
        </InputLabel>
        {errors?.img_url && (
          <FormHelperText
            error={errors?.img_url ? true : false}
            sx={{ marginTop: '0.85rem' }}
          >
            {'Please provide a car image'}
          </FormHelperText>
        )}
        <Button
          type='submit'
          variant='contained'
          disableElevation
          onSubmit={handleSubmit(onSubmit)}
        >
          Submit <i className='fas fa-caret-right' />
        </Button>
      </form>
      {/* Alerts feedback */}
      <LoadingScreen isLoading={isLoading} />
      <SuccessAlert isSuccess={isSuccess}>
        Your car was published successfully! See online
      </SuccessAlert>
      <ErrorAlert isError={isError}>
        Something went wrong from the server, please try later
      </ErrorAlert>
    </>
  );
}

export default CarForm;
