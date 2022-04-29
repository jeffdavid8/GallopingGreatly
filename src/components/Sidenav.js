import React, {  useEffect } from 'react';
import $ from 'jquery'
import M from 'materialize-css'
import MainMenu from "./MainMenu"

const Sidenav = () => {

  useEffect(() => {
    /**
    * SideNav
    */
    var elems = document.querySelectorAll('.sidenav');
    var sidenav = M.Sidenav.init(elems, {});

    $(".sidenav li a").on('click', function(e) {
      var instance = M.Sidenav.getInstance($(this).closest('.sidenav'));
      instance.close();
    })

  }, [])

  return (
    <ul id="slide-out" className="sidenav">
      <li>
      <MainMenu />
      </li>
      <li>
        <hr />
      </li>
      <li className="no-padding"></li>
      <li className="no-padding">
        <a className="resetStateBtn" href="/">
          <i className="material-icons">refresh</i>Reload
        </a>
      </li>
    </ul>
  );
};



export default Sidenav;
