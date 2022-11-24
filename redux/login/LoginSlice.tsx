import { createSlice } from '@reduxjs/toolkit';
import loadState from '../localStorage';

type LoginProps = {
  isModalOpen: boolean;
  userCredentials: UserCredentials;
};

const persistedUserCredentials = loadState();

const initialState: LoginProps = {
  isModalOpen: false,
  userCredentials: {
    username: persistedUserCredentials?.username || '',
    userIcon: persistedUserCredentials?.userIcon || '',
  },
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    hydrate: (state, action) => {
      return action.payload;
    },
    openCloseModal: (state, action) => {
      state.isModalOpen = action.payload;
    },
    saveUserCredentials: (state, action) => {
      state.userCredentials.username = action.payload.username;
      state.userCredentials.userIcon = action.payload.userIcon;
    },
  },
});

export const { hydrate, openCloseModal, saveUserCredentials } = loginSlice.actions;
export default loginSlice.reducer;
