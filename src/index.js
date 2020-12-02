import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";

///import { ProductProvide } from "./context/context";
import "./i18n";
import { ProductProvide } from "./context/context";




ReactDOM.render(
  
    <BrowserRouter>
    <Suspense fallback={<div>loading</div>}>
    <ProductProvide>
    <App />
    </ProductProvide>
    </Suspense>
    </BrowserRouter>
    
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
