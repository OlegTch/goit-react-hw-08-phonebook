import { createAction } from '@reduxjs/toolkit';

const changeFilter = createAction('contact/Filter');

export const contactsActions = {
  changeFilter,
};
