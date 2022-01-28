import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#2196f3',
  },
};

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      {!isLoggedIn && (
        <NavLink
          to="/"
          exact
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          Home
        </NavLink>
      )}

      {/* {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          Phonebook
        </NavLink>
      )} */}
    </nav>
  );
};

export default Navigation;

/* <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
      Home
    </NavLink> */

/* <NavLink
        to="/contacts"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Phonebook
      </NavLink> */
