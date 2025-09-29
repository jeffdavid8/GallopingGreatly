import React, {  useEffect } from 'react';
import $ from 'jquery'
import logo from '../react-logo.svg';

const Loader = () => {

  useEffect(() => {
    $('#loadingOverlay').fadeOut(600, function() { $(this).css('display', 'none')});
  }, [])

  return (
    <div id="loadingOverlay" className="App-loader">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        GallopingGreatly.org
        </p>
      </div>
  )
}


export default Loader
