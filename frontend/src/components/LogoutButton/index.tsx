import React from 'react';
import removeToken from '../../scripts/localStorage/removeToken';
import { createBrowserHistory } from 'history';

const LogoutButton: React.FunctionComponent = () => {
  const handleClick = () => {
    removeToken();
    createBrowserHistory().go(0);
  }

  return (
    <button
      className="btn btn-light"
      onClick={ handleClick }
    >
      Logout
    </button>
  );
}

export default LogoutButton;
