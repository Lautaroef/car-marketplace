import React, { useState } from 'react';
import { auth } from './firebaseConfig';
import { useDispatch } from 'react-redux';
import { saveUserCredentials } from '../../redux/login/LoginSlice';
// Firebase
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import Modal from './Modal';

function FirebaseActions() {
  const [firebaseErrors, setFirebaseErrors] = useState('');
  const [userEmailAndPassword, setUserEmailAndPassword] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const { email, password } = userEmailAndPassword;

  // Firebase
  onAuthStateChanged(auth, (currentUser) => {
    dispatch(
      saveUserCredentials({
        username: currentUser?.displayName || currentUser?.email,
        userIcon: currentUser?.photoURL,
      })
    );
  });

  // Register
  const register = async () => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user_email = res?.user.email;
      const user_icon = res?.user.photoURL;
      console.log(res);
      dispatch(
        saveUserCredentials({
          username: user_email,
          userIcon: user_icon,
        })
      );
      setFirebaseErrors('');
    } catch (error) {
      const prettyError = error?.code.replace('auth/', '').split('-').join(' ');
      setFirebaseErrors(prettyError);
    }
  };
  // Login
  const login = async () => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const user_email = res?.user.email;
      const user_icon = res?.user.photoURL;
      console.log(res);
      dispatch(
        saveUserCredentials({
          username: user_email,
          userIcon: user_icon,
        })
      );
      setFirebaseErrors('');
    } catch (error) {
      const prettyError = error?.code.replace('auth/', '').split('-').join(' ');
      setFirebaseErrors(prettyError);
    }
  };

  // Google auth
  const provider = new GoogleAuthProvider();
  const signInWidthGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      const user_name = res?.user.displayName;
      const user_icon = res?.user.photoURL;
      dispatch(
        saveUserCredentials({
          username: user_name,
          userIcon: user_icon,
        })
      );
      setFirebaseErrors('');
    } catch (error) {
      console.log(error);
      const prettyError = error?.code.replace('auth/', '').split('-').join(' ');
      setFirebaseErrors(prettyError);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <Modal
      login={login}
      logout={logout}
      register={register}
      signInWidthGoogle={signInWidthGoogle}
      firebaseErrors={firebaseErrors}
      userEmailAndPassword={userEmailAndPassword}
      setUserEmailAndPassword={setUserEmailAndPassword}
    />
  );
}

export default FirebaseActions;
