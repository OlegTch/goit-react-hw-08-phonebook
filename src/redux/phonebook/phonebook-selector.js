export const getContactsItems = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const getFilteredContacts = state => {
  const allContacts = getContactsItems(state);
  const filter = getFilter(state);

  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

export const getLoader = state => state.contacts.loading;
