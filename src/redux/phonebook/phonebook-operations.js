import axios from 'axios';
import { toast } from 'react-toastify';

import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://61e41facfbee6800175eb1e6.mockapi.io';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  const { data } = await axios.get('/contacts');
  return data;
});

const addContact = createAsyncThunk(
  'contacts/addContacts',
  async ({ name, number }) => {
    const contact = { name, number, completed: false };
    const { data } = await axios.post('/contacts', contact);
    toast.success('new contact was added');
    return data;
  },
);

const deleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async contactId => {
    const { data } = await axios.delete(`/contacts/${contactId}`);
    toast.success('contact was deleted');
    return data;
  },
);

export const contactOperations = {
  addContact,
  deleteContact,
  fetchContacts,
};
