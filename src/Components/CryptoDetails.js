import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

function DetailsHeader() {
  const navigate = useNavigate();

  const clickHandle = () => {
    navigate('/');
  };

  return (
    <header className="head-details">
      <div className="banner">
        <div className="logo-detail">
          <span className="back">
            <i className="fa fa-chevron-left" aria-hidden="true" onClick={() => clickHandle()} />
            <span className="back-txt white">Back</span>
          </span>
        </div>
        <div className="home-title">
          <span className="white">Coin Details</span>
        </div>
      </div>
      <div className="right-icon flex">
        <span className="mic"><i className="fa fa-microphone" aria-hidden="true" /></span>
        <span className="settings">
          <i className="fa fa-cog" aria-hidden="true" />
        </span>
      </div>
    </header>
  );
}

export default DetailsHeader;
