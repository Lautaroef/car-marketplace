import { configureStore, TypedStartListening } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { carsApi } from './carsInfo/carsApi';
import loginSlice from './login/LoginSlice';
import filtersSlice from './carsInfo/filtersSlice';

const store = configureStore({
  reducer: {
    loginValues: loginSlice,
    filtersValues: filtersSlice,
    [carsApi.reducerPath]: carsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // To escape 'non-serializable error' when login modal is opened :/
      serializableCheck: {
        ignoredActions: [
          'login/openCloseModal',
          'login/saveUserCredentials',
          'cars/uploadImage/fulfilled',
          'uploadImage.imageResponse',
        ],
      },
    }).concat(carsApi.middleware),
});

// Save user credentials into localStorage
store.subscribe(() => {
  localStorage.setItem(
    'userCredentials',
    JSON.stringify(store.getState().loginValues.userCredentials)
  );
});

// To able refetch on focus or refetch on reconnect etc.
setupListeners(store.dispatch);

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStartListening = TypedStartListening<AppState, AppDispatch>;

export default store;
