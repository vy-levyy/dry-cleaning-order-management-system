import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import useUpdatedRole from './hooks/useUpdatedRole';
import useIsLoggedIn from './hooks/useIsLoggedIn';
import PrivateRoute from './components/PrivateRoute';
import PageAuthorization from './pages/PageAuthorization';
import PageRegistration from './pages/PageRegistration';
import PagePasswordRequestUpdate from './pages/PagePasswordRequestUpdate';
import PagePasswordUpdate from './pages/PagePasswordUpdate';
import PageAddCleaner from './pages/PageAddCleaner';

const App: React.FunctionComponent = () => {
  useUpdatedRole();

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <PageAuthorization />
        </Route>
        <Route path="/authorization" exact>
          <PageAuthorization />
        </Route>
        <Route path="/registration" exact>
          <PageRegistration />
        </Route>
        <Route path="/request-update-password" exact>
          <PagePasswordRequestUpdate />
        </Route>
        <Route path="/update-password" exact>
          <PagePasswordUpdate />
        </Route>
        <PrivateRoute
          path="/add-cleaner"
          component={ PageAddCleaner }
          isLoggedIn={ useIsLoggedIn() }
          exact
        />
      </Switch>
    </Router>
  );
}

export default App;
