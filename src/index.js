import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const firebaseConfig = {

  apiKey: "AIzaSyDeWPty7ZOfBf59K8WGwV7lK0V-JftTpe4",
  authDomain: "devdisrupter.firebaseapp.com",
  projectId: "devdisrupter",
  storageBucket: "devdisrupter.appspot.com",
  messagingSenderId: "122160577299",
  appId: "1:122160577299:web:0b840466fb0b175fdfb8e6",
  measurementId: "G-V2YYBGJE7V"
};
// Initialize Firebase
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>, document.getElementById('root')
);

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
