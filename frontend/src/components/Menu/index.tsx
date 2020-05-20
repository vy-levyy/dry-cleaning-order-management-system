import React from 'react';
import getRole from './scripts/getRole';
import getItemsByRole from './scripts/getItemsByRole';
import MenuList from './MenuList';
import { Role } from './types';
import getActiveItem from './scripts/getActiveItem';

const Menu: React.FunctionComponent = () => {
  let role: Role | null = null;

  role = getRole();

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
          list={ getItemsByRole(role) }
          activeItem={ getActiveItem() }
        />
      </div>
    </div>
  );
}

export default Menu;
