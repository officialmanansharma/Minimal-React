import {initializeApp} from 'firebase/app';
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "minimal-react-a7fc1.firebaseapp.com",
  databaseURL: "https://minimal-react-a7fc1-default-rtdb.firebaseio.com",
  projectId: "minimal-react-a7fc1",
  storageBucket: "minimal-react-a7fc1.appspot.com",
  messagingSenderId: "13548740964",
  appId: "1:13548740964:web:23b883091567a669f0da71",
  measurementId: "G-6K00EXQ86R"
};

export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);