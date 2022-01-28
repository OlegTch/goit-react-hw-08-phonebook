import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [authOperations.fetchCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
    },
  },
  //   loading,
  //   error,
});

// const loading = createReducer(false, {
//   [fetchContacts.pending]: () => true,
//   [fetchContacts.fulfilled]: () => false,
//   [fetchContacts.rejected]: () => false,
//   [addContact.pending]: () => true,
//   [addContact.fulfilled]: () => false,
//   [addContact.rejected]: () => false,
//   [deleteContact.pending]: () => true,
//   [deleteContact.fulfilled]: () => false,
//   [deleteContact.rejected]: () => false,
// });

// const error = createReducer(null, {
//   [fetchContacts.rejected]: (_, action) => toast.error('contact fetch error'),
//   [fetchContacts.pending]: () => null,
//   [addContact.rejected]: (_, action) => toast.error('contact add error'),
//   [addContact.pending]: () => null,
//   [deleteContact.rejected]: (_, action) => toast.error('contact delete error'),
//   [deleteContact.pending]: () => null,
// });

export default authSlice.reducer;
