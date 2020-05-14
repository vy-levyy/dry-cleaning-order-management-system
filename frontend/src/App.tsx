import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import PageRegistration from './pages/PageRegistration';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App: React.FunctionComponent = () => {
  return (
    <Provider store={ store }>
      <Router>
          <Switch>
            <Route path="/registration" exact>
              <PageRegistration />
            </Route>
          </Switch>
        </Router>
    </Provider>
  );
}

export default App;
