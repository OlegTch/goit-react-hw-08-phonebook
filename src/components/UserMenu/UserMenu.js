import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations.js';
import styles from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div className={styles.thumb}>
      <p className={styles.name}>Welcome, {name}</p>
      <button
        className={styles.button}
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
