import React from 'react';
import {Helmet} from "react-helmet";

import ButtonAppBar from './components/navbar';
import Navs from './components/navs';
import Footer from './components/footer';

import { useTranslation } from 'react-i18next';
import Home from './pages/home';
import Gallery from './pages/gallery';
import Contact from './pages/contact';
import AboutUs from './pages/aboutUs';
import Products from './pages/products';
import WhereToBuy from './components/productsSection/where';
import QCar from './components/productsSection/qCar';
import QWood from './components/productsSection/qWood';
import QPaint from './components/productsSection/qPaint';
import Troubleshooting from './components/productsSection/troubleshooting';
import ScrollToTop from './assets/scroll';



import {Route, Link, Switch,useParams} from "react-router-dom";
import './App.css'



function App() {

  return (
    <>
     <ScrollToTop />
    <Navs />
    <Route exact path="/" component={Home}></Route>
    <Route  path="/products" component={Products}></Route>
    <Route  path="/gallery" component={Gallery}></Route>
    <Route  path="/contact" component={Contact}></Route>
    <Route  path="/aboutus" component={AboutUs}></Route>
    <Route  path="/branchs" component={WhereToBuy}></Route>
    <Route  path="/questionCar" component={QCar}></Route>
    <Route  path="/questionWood" component={QWood}></Route>
    <Route  path="/questionPaint" component={QPaint}></Route>
    <Route  path="/troubleshooting" component={Troubleshooting}></Route>




    <Footer />
   </>
  );
}

export default App;
