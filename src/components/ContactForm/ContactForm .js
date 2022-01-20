import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactOperations } from '../../redux/phonebook/phonebook-operations';
import { getContactsItems } from '../../redux/phonebook/phonebook-selector';
import styles from './ContactForm.module.css';
import { nanoid } from 'nanoid';

import { toast } from 'react-toastify';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContactsItems);
  const dispatch = useDispatch();

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    checkContacts(contacts);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const checkContacts = contacts => {
    const checkContactsName = contacts.find(
      contact => name.toLowerCase() === contact.name.toLowerCase(),
    );
    const checkContactsNumber = contacts.find(
      contact => number.toLowerCase() === contact.phone.toLowerCase(),
    );
    if (checkContactsName) {
      return onError(`${checkContactsName.name}`);
    }
    if (checkContactsNumber) {
      return onError(`${checkContactsNumber.phone}`);
    }

    dispatch(contactOperations.addContact({ name, phone: number }));
  };

  const onError = checkContacts => {
    const message = `${checkContacts} is already in contacts`;
    toast.warning(message);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor={nameInputId} className={styles.label}>
        Name
      </label>
      <input
        className={styles.input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
        id={nameInputId}
        value={name}
      />
      <label htmlFor={numberInputId} className={styles.label}>
        Number
      </label>
      <input
        className={styles.input}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
        id={numberInputId}
        value={number}
      />

      <button className={styles.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
