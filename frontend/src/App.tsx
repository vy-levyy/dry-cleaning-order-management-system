import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PageAuthorization from './pages/PageAuthorization';
import PageRegistration from './pages/PageRegistration';
import PagePasswordRequestUpdate from './pages/PagePasswordRequestUpdate';
import PagePasswordUpdate from './pages/PagePasswordUpdate';
import useUpdatedRole from './hooks/useUpdatedRole';

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
      </Switch>
    </Router>
  );
}

export default App;
