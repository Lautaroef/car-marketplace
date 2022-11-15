import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import FormInputs from './CarForm';
import FinalResult from './FinalResult';
import bulbImage from '../../images/logos/bulb-fa.svg';

function Main() {
  const { watch, register, formState, handleSubmit } = useForm();
  const [previewSource, setPreviewSource] = useState<string>('');
  const carFormInfo = watch();

  // Process to submit image to Cloudinary (in Base64)
  const handleImageChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const files = target.files![0] as File;
    if (!files) return;
    previewFile(files);
  };

  const previewFile = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => setPreviewSource(reader.result as string);
  };

  return (
    <section className='sell-a-car'>
      <div className='form-section'>
        <div className='sell-header'>
          <div>
            <h2>Car Details</h2>
            <h4>
              <img src={bulbImage} alt='bulb-svg' />
              Listing Tips
            </h4>
          </div>
          <p>Be sure all the details about your car are as accurate as possible.</p>
        </div>
        <FormInputs
          carFormInfo={carFormInfo}
          errors={formState?.errors}
          base64EncodedImage={previewSource}
          register={register}
          handleSubmit={handleSubmit}
          handleImageChange={handleImageChange}
        />
      </div>
      <div className='box-shadow'>
        <FinalResult carFormInfo={carFormInfo} previewSource={previewSource} />
      </div>
    </section>
  );
}

export default Main;
