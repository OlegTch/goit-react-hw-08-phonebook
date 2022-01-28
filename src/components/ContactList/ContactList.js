import { useSelector, useDispatch } from 'react-redux';
import { contactOperations } from '../../redux/phonebook/phonebook-operations';
import { useEffect } from 'react';

import ContactItem from './ContactItem';

import {
  getFilteredContacts,
  getContactsItems,
} from '../../redux/phonebook/phonebook-selector';

import styles from './ContactList.module.css';

const ContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  const contacts = useSelector(getContactsItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      {contacts.length > 0 ? (
        <ul className={styles.contactsList}>
          {filteredContacts.map(({ id, name, number }) => (
            <ContactItem key={id} id={id} name={name} number={number} />
          ))}
        </ul>
      ) : (
        <p className={styles.emptyText}>Contacts list is empty</p>
      )}
    </>
  );
};

export default ContactList;
