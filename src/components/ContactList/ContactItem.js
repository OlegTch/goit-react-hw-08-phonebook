import { useDispatch } from 'react-redux';
import { contactOperations } from '../../redux/phonebook/phonebook-operations';

import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(contactOperations.deleteContact(id));

  return (
    <li className={styles.contactsItem} id={id}>
      <p className={styles.contactsName}>{name}:</p>
      <p className={styles.contactsNumber}>{number}</p>
      <button
        className={styles.contactsButton}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};

export default ContactItem;
