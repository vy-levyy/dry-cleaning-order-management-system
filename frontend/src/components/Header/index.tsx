import React from 'react';
import Menu from '../Menu';
import LogoutButton from '../LogoutButton';
import useIsLoggedIn from '../../hooks/useIsLoggedIn';

const Header: React.FunctionComponent = () => {
  const isShowlogoutButton = useIsLoggedIn();

  const logoutButtonElement = (
    <div className="col-xl-4 text-center mt-1 mb-2">
      <LogoutButton />
    </div>
  );

  return (
    <div className={ `row justify-content-${isShowlogoutButton ? 'end' : 'center'}` }>
      <div className="col-xl-4 text-center mt-1 mb-2">
        <Menu />
      </div>
      { isShowlogoutButton ? logoutButtonElement : null }
    </div>
  )
}

export default Header;
