import { createApi, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const carsApi = createApi({
  reducerPath: 'cars',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/cars',
    // baseUrl: 'https://rumrumcars.herokuapp.com/api/cars/',
    // baseUrl: 'http://localhost:3001/api/cars',
  }),
  keepUnusedDataFor: 90,
  refetchOnFocus: false,
  refetchOnReconnect: true,
  endpoints: (build) => ({
    getCars: build.query({
      query: (query) => `?${query}`,
    }),
    getCar: build.mutation({
      query: (carID) => ({
        method: 'GET',
        url: `/${carID}`,
      }),
    }),
    deleteCar: build.mutation({
      query: (carID) => ({
        method: 'DELETE',
        url: `/${carID}`,
      }),
    }),
    postCar: build.mutation({
      query: (body): string | FetchArgs => ({
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        url: '/',
        body,
      }),
    }),
  }),
});

export const {
  useGetCarsQuery,
  useGetCarMutation,
  usePostCarMutation,
  useDeleteCarMutation,
} = carsApi;
