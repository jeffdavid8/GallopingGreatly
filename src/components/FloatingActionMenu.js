import React, { useState, useEffect } from 'react';
import $ from 'jquery'
import M from 'materialize-css'

const FloatingActionMenu = () => {

  useEffect(() => {
  /**
   * Floating Action Menu
   */
   var elems = document.querySelectorAll('.fixed-action-btn');
   var fixedActionButtons = M.FloatingActionButton.init(elems, {});
 
 
   $('#floatingActionMenu .searchBtn').on('click', function(e) {
     e.preventDefault();
     window.scrollTo(0,0);
     $('#kjvBot').select().focus();
     fixedActionButtons[0].close();
     return false;
   })
 
   $('.toTopBtn').on('click', function(e) {
     e.preventDefault();
     window.scrollTo(0,0);
     fixedActionButtons[0].close();
     return false;
   })
 
   $('.toBottomBtn').on('click', function(e) {
     e.preventDefault();
     window.scrollTo(0,document.body.scrollHeight);
     fixedActionButtons[0].close();
     return false;
   })
 
 
  }, [])

  return (
    <div id="floatingActionMenu" className="FloatingActionMenu fixed-action-btn">
        <a className="btn-floating btn-large grey darken-3">
          <i className="fa fa-ellipsis-v"></i>
        </a>
        <ul>
          <li>
            <a
              title="Instagram"
              href="https://instagram.com/gallopgreatly"
              target="_blank"
              className="btn-floating orange"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a
              title="Facebook"
              href="https://www.facebook.com/gallopgreatly"
              className="btn-floating blue"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              title="Email"
              href="#Contact"
              className="btn-floating email"
            >
              <i className="fas fa-at"></i>
            </a>
          </li>
          <li>
            <a
              title="Call"
              href="tel: 7655066462"
              className="btn-floating green"
            >
              <i className="material-icons">call</i>
            </a>
          </li>
        </ul>

    </div>
  )
}


export default FloatingActionMenu
