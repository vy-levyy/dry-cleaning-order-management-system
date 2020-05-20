import React, { useState, useEffect } from 'react';
import store from './store';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PageAuthorization from './pages/PageAuthorization';
import PageRegistration from './pages/PageRegistration';
import PagePasswordRequestUpdate from './pages/PagePasswordRequestUpdate';
import PagePasswordUpdate from './pages/PagePasswordUpdate';
import { userApi } from './controller/api';
const App: React.FunctionComponent = () => {
  let [, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      setIsLoggedIn(await isAuth());
    })()
  }, []);

  return (
    <Provider store={ store }>
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
    </Provider>
  );
}

export default App;

async function isAuth() {
  const result = await userApi.verify({
    token: localStorage.getItem('token')
  });
  
  return Boolean(result.data?.candidate);
}
