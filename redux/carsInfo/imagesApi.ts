import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const imagesApi = createApi({
  reducerPath: 'images',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rumrumcars.herokuapp.com/api/cars/images/',
  }),
  endpoints: (build) => ({
    getCarImages: build.query({
      query: (query) => `${query}`,
    }),
    postCarImage: build.mutation({
      query: (base64EncodedImage) => ({
        url: `/upload`,
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ data: base64EncodedImage }),
      }),
    }),
  }),
});

export const { useGetCarImagesQuery, usePostCarImageMutation } = imagesApi;
