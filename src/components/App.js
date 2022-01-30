import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';

import Container from './Container/Container';
import Header from './Header/Header';
import HomeView from '../views/HomeView/HomeView';
import ContactsView from '../views/ContactsViews/ContactsView';
import RegisterView from '../views/RegisterView/RegisterView';
import LoginView from '../views/LoginView/LoginView';

import authOperations from '../redux/auth/auth-operations';
import Loader from './Loader/Loader';
import { useEffect } from 'react';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import authSelectors from '../redux/auth/auth-selectors';

function App() {
  // const loading = useSelector(getLoader);
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser,
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      {isFetchingCurrentUser ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Switch>
            <PublicRoute exact path="/" restricted>
              <HomeView />
            </PublicRoute>

            <PublicRoute exact path="/register" restricted>
              <RegisterView />
            </PublicRoute>

            <PublicRoute exact path="/login" restricted>
              <LoginView />
            </PublicRoute>

            <PrivateRoute path="/contacts">
              <ContactsView />
            </PrivateRoute>

            <PrivateRoute>
              <ContactsView />
            </PrivateRoute>
          </Switch>
        </>
      )}
    </Container>
  );
}

export default App;

// import { getLoader } from '../redux/phonebook/phonebook-selector';
/* <Route exact path="/" component={HomeView} /> */
/* <Route path="/contacts" component={ContactsView} /> */
/* <Route path="/register" component={RegisterView} /> */
/* <Route path="/login" component={LoginView} /> */
