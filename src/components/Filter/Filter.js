import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { contactsActions } from '../../redux/phonebook/phonebook-actions';
import {
  getFilter,
  getContactsItems,
} from '../../redux/phonebook/phonebook-selector';
import styles from './Filter.module.css';

const Filter = () => {
  const contacts = useSelector(getContactsItems);
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeFilter = event =>
    dispatch(contactsActions.changeFilter(event.target.value));

  const filterInputId = nanoid();

  return (
    <>
      {contacts.length > 0 && (
        <div className={styles.FilterThumb}>
          <label htmlFor={filterInputId} className={styles.label}>
            Find contacts by name
          </label>
          <input
            className={styles.input}
            type="text"
            name="filter"
            required
            onChange={onChangeFilter}
            id={filterInputId}
            value={filterValue}
            autoComplete="off"
          />
        </div>
      )}
    </>
  );
};

export default Filter;
