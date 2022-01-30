import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { contactsActions } from './phonebook-actions';
import { toast } from 'react-toastify';

import { contactOperations } from './phonebook-operations';

const { fetchContacts, addContact, deleteContact } = contactOperations;
const { changeFilter } = contactsActions;

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => {
    return [...state, payload];
  },

  [deleteContact.fulfilled]: (state, { payload }) => {
    return state.filter(contact => contact.id !== payload);
  },
});

const loading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, action) => toast.error('contact fetch error'),
  [fetchContacts.pending]: () => null,
  [addContact.rejected]: (_, action) => toast.error('contact add error'),
  [addContact.pending]: () => null,
  [deleteContact.rejected]: (_, action) => toast.error('contact delete error'),
  [deleteContact.pending]: () => null,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
