import { useSelector } from 'react-redux';

import styles from './Phonebook.module.css';
import ContactForm from './ContactForm/ContactForm ';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import Loader from './Loader/Loader';
import { getLoader } from '../redux/phonebook/phonebook-selector';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

function App() {
  const loading = useSelector(getLoader);

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {loading && <Loader />}
      <Filter />
      <ContactList />
      <ToastContainer autoClose={2000} position="top-center" theme="colored" />
    </div>
  );
}

export default App;
