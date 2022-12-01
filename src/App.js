/* eslint-disable import/extensions */
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './mediaQueries.css';
import Cryptos from './Components/Cryptos';
import Crypto from './Components/Crypto';
import NavBar from './Components/NavBar';
import Search from './Components/CryptoDetails';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={(
          <>
            <NavBar />
            <Cryptos />
          </>
        )}
      />
      <Route
        path="/crypto-details"
        element={(
          <>
            <Search />
            <Crypto />
          </>
        )}
      />
    </Routes>
  );
}

export default App;
