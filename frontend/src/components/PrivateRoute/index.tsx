import React from 'react';
import {
  Route,
  Redirect
} from "react-router-dom";

function PrivateRoute ({ component: Component, isLoggedIn, ...rest }: any) {
  let renderedComponent = null;

  if (isLoggedIn !== null) {
    const renderFunction = (props: any) => {
      return isLoggedIn
        ? <Component { ...props } />
        : <Redirect to="/authorization" />
    }

    renderedComponent = <Route { ...rest } render={ renderFunction } />;
  }

  return renderedComponent;
};

export default PrivateRoute;
