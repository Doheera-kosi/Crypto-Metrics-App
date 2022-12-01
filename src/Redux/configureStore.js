import { configureStore } from '@reduxjs/toolkit';
import crypto from './reducers/cryptoSlice';

const Store = configureStore({
  reducer: {
    cryptoReducer: crypto,
  },
});

export default Store;
