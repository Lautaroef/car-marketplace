import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {REACT_APP_FIREBASE_AUTH_API_KEY, REACT_APP_FIREBASE_AUTH_DOMAIN} from './private-settings.js' 

const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_AUTH_API_KEY,
  authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_AUTH_PROJECT_ID,
  storageBucket: process.env.FIREBASE_AUTH_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_AUTH_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_AUTH_APP_ID,
  measurementId: process.env.FIREBASE_AUTH_MEASUREMENT_ID,
};
// const app = getAnalytics(firebaseConfig);

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
