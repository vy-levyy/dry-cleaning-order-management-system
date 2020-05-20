import React from 'react';
import getRole from './scripts/getRole';
import getItemsByRole from './scripts/getItemsByRole';
import MenuList from './MenuList';

const Menu: React.FunctionComponent = () => {
  const role = getRole();

  console.log(getItemsByRole('unlogged'));

  return (
    <div className="container">
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Menu
        </button>
        <MenuList
          list={ getItemsByRole('unlogged') }
          activeItem={ 'signin' }
        />
      </div>
    </div>
  );
}

export default Menu;
