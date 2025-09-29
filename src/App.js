//import React, { useState, useEffect } from 'react';
import './App.css';
import $ from 'jquery'
import M from 'materialize-css'
import Loader from './components/Loader';
import Header from './components/Header';
import Sidenav from './components/Sidenav';
import FloatingActionMenu from './components/FloatingActionMenu';
import Dialogs from './components/Dialogs';
import SearchIndicator from './components/SearchIndicator';
import Spotlight from './components/home-page/Spotlight';
import Counseling from './components/home-page/Counseling';
import OurWork from './components/home-page/OurWork';
import About from './components/home-page/About';
import Donate from './components/home-page/Donate'; // New
import Contact from './components/home-page/Contact';
import PhotoGrid from './components/home-page/PhotoGrid';

function App() {

  return (
    <div className="App">
      <Loader />
      <Sidenav />
      <Header />

      <Spotlight />
      <Counseling />
      <OurWork />
      <PhotoGrid />
      <About />
      <Donate />
      <Contact />

      <FloatingActionMenu />
      <Dialogs />
      <SearchIndicator />
    </div>
  );
}

 
export default App;
