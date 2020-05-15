import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import PageAuthorization from './pages/PageAuthorization';
import PageRegistration from './pages/PageRegistration';

const App: React.FunctionComponent = () => {
  return (
    <Provider store={ store }>
      <Router>
          <Switch>
            <Route path="/authorization" exact>
              <PageAuthorization />
            </Route>
            <Route path="/registration" exact>
              <PageRegistration />
            </Route>
          </Switch>
        </Router>
    </Provider>
  );
}

export default App;
