// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDKDXdbPeiRIPRVfj9uFNK_J6F0pyUD15Y',
  authDomain: 'react-disney-plus-app-4f99e.firebaseapp.com',
  projectId: 'react-disney-plus-app-4f99e',
  storageBucket: 'react-disney-plus-app-4f99e.appspot.com',
  messagingSenderId: '59610942526',
  appId: '1:59610942526:web:28644d67468b70d68f556f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
