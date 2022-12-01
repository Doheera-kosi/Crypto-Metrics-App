/* eslint-disable no-param-reassign */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const FETCH_CRYPTOS = 'redux/FETCH_CRYPTOS';
const apiURL = 'https://api.coincap.io/v2/assets';

const initialState = {
  cryptos: [],
  status: '',
};

export const FetchCryptos = createAsyncThunk(
  FETCH_CRYPTOS,
  async (thunkAPI) => {
    try {
      const evans = await axios.get(apiURL);
      return evans.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.res);
    }
  },
);

const CryptoSlice = createSlice({
  name: 'cryptoReducer',
  initialState,
  reducers: {},
  extraReducers: {

    [FetchCryptos.pending]: (state) => {
      state.status = 'loading';
    },

    [FetchCryptos.rejected]: (state) => {
      state.status = 'failure';
    },

    [FetchCryptos.fulfilled]: (state, action) => {
      state.status = 'success';
      state.cryptos = [
        ...state.cryptos, action.payload.data,
      ];
    },
  },

});

export default CryptoSlice.reducer;
