import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import MainRoutes from './Router/Routes';
import "./App.css";

ReactDOM.render(
  <BrowserRouter  basename='/tmdb-clone'>
    <MainRoutes/>
  </BrowserRouter>,
  document.getElementById('root')
);

// return data.data.results.map(key => key.name === "Official Trailer")[0].key