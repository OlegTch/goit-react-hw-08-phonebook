import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    console.log(data);
    return data;
  } catch (error) {
    toast.error('Error. Try again');
  }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.error();
    toast.error('Error. Try again');
  }
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    //   const { data } = await axios.post('/users/logout', credentials);
    const { data } = await axios.post('/users/logout');
    token.unset();
    return data;
  } catch (error) {
    console.error();
    toast.error('Error. Try again');
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      console.log('token is empty');
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      toast.error('Error. Try again');
    }
  },
);

const authOperations = {
  testName: null,
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default authOperations;
