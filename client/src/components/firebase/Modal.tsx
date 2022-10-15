import React, { useState } from 'react';
import { openCloseModal } from 'redux/login/LoginSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { VisibilityOn, VisibilityOff } from '../other-components/Visibility';
import googleImg from '../../images/logos/google-icon.png';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import DialogContent from '@mui/material/DialogContent';
import InputAdornment from '@mui/material/InputAdornment';
import DialogContentText from '@mui/material/DialogContentText';
import ClickAwayListener from '@mui/material/ClickAwayListener';

type Props = {
  login: () => Promise<void>;
  logout: () => Promise<void>;
  register: () => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  firebaseError: string;
  user: {
    email: string;
    password: string;
  };
  setUser: React.Dispatch<
    React.SetStateAction<{
      email: string;
      password: string;
    }>
  >;
};

function Modal({
  login,
  logout,
  register,
  signInWithGoogle,
  firebaseError,
  user,
  setUser,
}: Props) {
  const [disableLoginRegister, setDisableLoginRegister] = useState<boolean>(true);
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const isModalOpen = useAppSelector((state) => state.loginValues.isModalOpen);
  const { email, password } = user;
  // Get username from the last firebase operation
  const { username } = useAppSelector((state) => state.loginValues.userCredentials);
  const dispatch = useAppDispatch();

  const handleAbleDisableButton = () => {
    if (email.length > 12 && password.length > 4) {
      return setDisableLoginRegister(false);
    }
    setDisableLoginRegister(true);
  };

  const handleCloseModal = () => {
    dispatch(openCloseModal(false));
  };

  return (
    <ClickAwayListener onClickAway={handleCloseModal}>
      <Dialog
        data-testid='loginModal'
        className='login-dialog'
        open={isModalOpen}
        onClose={handleCloseModal}
      >
        <form onChange={handleAbleDisableButton}>
          <div className='title-close'>
            <div>
              <h2>Register/Login</h2>
              <h4>
                Welcome to <span>RumRumCars</span>
              </h4>
            </div>
            <i className='fas fa-times' onClick={handleCloseModal} />
          </div>

          <DialogContent>
            <TextField
              autoFocus
              fullWidth
              variant='standard'
              type='email'
              label='Email Address'
              onChange={(e) =>
                setUser({
                  email: e.target.value,
                  password: password,
                })
              }
            />
            <TextField
              fullWidth
              variant='standard'
              label='Password'
              onChange={(e) =>
                setUser({
                  email: email,
                  password: e.target.value,
                })
              }
              InputProps={{
                type: showPassword ? 'password' : 'text',
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <VisibilityOn /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {/* Show input/firebase errors*/}
            {disableLoginRegister && !username && (
              <p data-auth-invalid-input>
                Please type your email and password to register / login
              </p>
            )}
            {firebaseError.length > 0 && (
              <p data-auth-firebase-error>
                Authentication error: <span>{firebaseError}</span>
              </p>
            )}
            <div className='register-login-buttons'>
              <Button
                fullWidth
                disableElevation
                className='auth-register'
                disabled={disableLoginRegister}
                onClick={register}
              >
                Register
              </Button>
              <Button
                fullWidth
                disableElevation
                className='auth-login'
                disabled={disableLoginRegister}
                onClick={login}
              >
                Login
              </Button>
            </div>
            <Button
              className='auth-logout'
              fullWidth
              disableElevation
              disabled={username ? false : true}
              variant='contained'
              onClick={logout}
            >
              Log Out
            </Button>
            <Divider className='auth-divider'>or</Divider>
            <Button className='auth-google' onClick={signInWithGoogle}>
              <img src={googleImg} alt='Google' />
              Login with Google
            </Button>
            <DialogContentText fontSize={'small'}>
              By doing this, I agree to RumRumCars's <span>Terms</span> and
              <span> Privacy Policy</span>
            </DialogContentText>
          </DialogContent>
        </form>
      </Dialog>
    </ClickAwayListener>
  );
}

export default Modal;
