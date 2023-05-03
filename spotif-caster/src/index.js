import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Buffer } from 'buffer';
import { request } from 'http';
import { SpotifyApiContext } from 'react-spotify-api';

const root = ReactDOM.createRoot(document.getElementById('root'));

let token = "BQBOLwGcl08nFaThla04hdrDyx67c_RIs87KNL6HkYJJWkkpRfBQ8IvscslQEIpITI9g6HOOxAvhuzF0_m6634R8DyTplqj-xEYBqqzD3bM_8ufzQpME"

root.render(
  <React.StrictMode>
    <SpotifyApiContext.Provider value={token}>
    <App />
    </SpotifyApiContext.Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
