import React from 'react';
import Menu from '../Menu';
import LogoutButton from '../LogoutButton';
import isLoggedIn from '../../scripts/isLoggedIn';

const Header: React.FunctionComponent = () => {
  const isShowlogoutButton = isLoggedIn();
  let logoutButtonElement = null;

  if (isShowlogoutButton) {
    logoutButtonElement = (
      <div className="col-xl-4 text-center mt-1 mb-2">
        <LogoutButton />
      </div>
    );
  }

  return (
    <div className={ `row justify-content-${isShowlogoutButton ? 'end' : 'center'}` }>
      {/* <div className="col-xl-4 text-center mt-1 mb-2">
        <Menu />
      </div>
      <div className="col-xl-4 text-center mt-1 mb-2">
        <LogoutButton />
      </div> */}
      <div className="col-xl-4 text-center mt-1 mb-2">
        <Menu />
      </div>
      { logoutButtonElement }
    </div>
  )
}

export default Header;
