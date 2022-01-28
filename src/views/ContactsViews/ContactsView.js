import { useSelector } from 'react-redux';

import ContactForm from '../../components/ContactForm/ContactForm ';
import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';
import Loader from '../../components/Loader/Loader';

import { getLoader } from '../../redux/phonebook/phonebook-selector';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

function ContactsView() {
  const loading = useSelector(getLoader);

  return (
    <div>
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

export default ContactsView;
