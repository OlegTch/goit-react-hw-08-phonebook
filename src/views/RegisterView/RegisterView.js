import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';

import styles from './RegisterView.module.css';

const RegisterView = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  const onHandleClick = e => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.thumb}>
      <h1 className={styles.title}> Please register! </h1>

      <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </label>

        <label className={styles.label}>
          E-mail
          <input
            className={styles.input}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </label>

        <label className={styles.label}>
          Password
          <input
            className={styles.input}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </label>

        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} type="submit">
              Register
            </button>
          </li>
          <li className={styles.item}>
            <button
              className={styles.button}
              type="button"
              onClick={onHandleClick}
            >
              Cancel
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default RegisterView;
