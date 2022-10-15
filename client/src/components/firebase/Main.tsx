import React, { useState } from 'react';
import { auth } from './firebaseConfig';
import { useAppDispatch } from 'redux/hooks';
import { saveUserCredentials } from '../../redux/login/LoginSlice';
import Modal from './Modal';
// Firebase
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

type UserProps = {
  email: string;
  password: string;
};

// ! Can be optimized using this hook https://usehooks.com/useAuth/
function FirebaseActions() {
  const [user, setUser] = useState<UserProps>({
    email: '',
    password: '',
  });
  const [firebaseError, setFirebaseError] = useState<string>('');
  const dispatch = useAppDispatch();
  const { email, password } = user;

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
      setFirebaseError('');
    } catch (error) {
      // @ts-ignore
      const prettyError = error?.code.replace('auth/', '').split('-').join(' ');
      setFirebaseError(prettyError);
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
      setFirebaseError('');
    } catch (error) {
      // @ts-ignore
      const prettyError = error?.code.replace('auth/', '').split('-').join(' ');
      setFirebaseError(prettyError);
    }
  };

  // Google auth
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = async () => {
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
      setFirebaseError('');
    } catch (error) {
      // @ts-ignore
      const prettyError = error?.code.replace('auth/', '').split('-').join(' ');
      setFirebaseError(prettyError);
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
      signInWithGoogle={signInWithGoogle}
      firebaseError={firebaseError}
      user={user}
      setUser={setUser}
    />
  );
}

export default FirebaseActions;
