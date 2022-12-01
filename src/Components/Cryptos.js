import { FadeLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormatNumber } from './FormatCheck/Validation';
import { FetchCryptos } from '../Redux/reducers/cryptoSlice';

function Crytpos() {
  const cryptoDataArray = [];
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetched = useSelector((state) => state.cryptoReducer);

  useEffect(() => {
    if (fetched.status === '') {
      dispatch(FetchCryptos());
    }
  }, [fetched.status, dispatch]);

  if (fetched.status === 'success') {
    cryptoDataArray.push(fetched.cryptos[0]);
  }

  const clickHandle = (cryptoObj) => {
    navigate(
      '/crypto-details',
      {
        state: {
          cryptos: cryptoObj,
        },
      },

    );
  };

  const [search, setSearch] = useState('');

  const searchHandle = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const searchRslt = [];
  const msg = document.querySelector('.search-msg');
  if (search === '') {
    if (msg) {
      msg.style.display = 'none';
    }
  }
  if (search) {
    msg.style.display = 'block';

    cryptoDataArray[0].map((i) => {
      if (i.name.toLowerCase().includes(search.toLocaleLowerCase())) {
        searchRslt.push(i);
      }
      cryptoDataArray[0] = searchRslt;

      if (searchRslt.length > 0) {
        msg.classList.add('success');
        msg.classList.remove('failure');
      } else {
        msg.classList.remove('success');
        msg.classList.add('failure');
      }
      return (cryptoDataArray);
    });
  }

  return (
    <div className="cryptos-container">
      <div className="wrapper flex">
        <div className="bg-wrap" />
        <div className="wrapper-content p2">
          <h4 className="white left h-one">CYRPTO CURRENCIES</h4>
          <p className="white left">
            {cryptoDataArray[0] ? cryptoDataArray[0].length : ''}
            {' '}
            {/* Cyrptos */}
          </p>
        </div>
      </div>
      <div className="search">
        <input
          type="text"
          name="search"
          value={search}
          onChange={searchHandle}
          placeholder="Search your crypto..."
        />
      </div>
      <h4 className="white p2">Global Crypto Stats</h4>
      <p className="search-msg">
        {!searchRslt.length ? 'No Cyrptos Found.' : `${searchRslt.length} Cryptos Found.`}
      </p>
      <div className="crypto-details flex">
        {cryptoDataArray[0] ? cryptoDataArray[0].map((i) => (
          <button key={i.id} onClick={() => clickHandle(i)} type="button" className="details_container p2">
            <i className="fa fa-arrow-circle-o-right" aria-hidden="true" />
            <div colSpan="2" className="crypto-name white">
              <span className="white crypto-info">{i.name}</span>
              <p>
                <span className="price white font-4">
                  $
                  {i.priceUsd > 1000
                    ? FormatNumber(+(i.priceUsd))
                    : Math.round(i.priceUsd * 100) / 100}
                </span>
                <br />
                <span className="change font-4">
                  {Math.round(i.changePercent24Hr * 100) / 100}
                  {i.changePercent24Hr > 0
                    ? (<i className="fa fa-caret-up" />)
                    : <i className="fa fa-caret-down" />}
                  {i.changePercent24Hr === 0 ? (<i className="fa fa-minus" />) : ''}
                </span>
              </p>
            </div>
          </button>
        ))
          : (
            <div>
              <div className="load-spinner">
                <FadeLoader color="#070707" size={500} />
              </div>
            </div>
          )}
      </div>
    </div>
  );
}

export default Crytpos;
