import React from 'react';
import Menu from '../Menu';

const Header: React.FunctionComponent = () => {
  return (
    <div className="row justify-content-center">
      <div className="col text-center mt-1 mb-2">
        <Menu />
      </div>
    </div>
  )
}

export default Header;
