import React from 'react';
import logo from '../assets/cryptoLogo.png';
import 'font-awesome/css/font-awesome.min.css';

function NavBar() {
  return (
    <header className="header flex">
      <div className="head-logo">
        <div className="logo">
          <span className="back">
            <span className="back-txt white"><img src={logo} alt="App Logo" className="logo" /></span>
          </span>
        </div>
      </div>
      <div className="right-icon">
        <span className="mic"><i className="fa fa-microphone" aria-hidden="true" /></span>
        <span className="app-settings">
          <i className="fa fa-cog" aria-hidden="true" />
        </span>
      </div>
    </header>
  );
}

export default NavBar;
