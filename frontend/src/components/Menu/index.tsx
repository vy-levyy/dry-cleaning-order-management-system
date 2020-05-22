import React from 'react';
import getRole from '../../hooks/useGetRole';
import getItemsByRole from './scripts/getItemsByRole';
import MenuList from './MenuList';
import { Role } from '../../types';
import getActiveItem from './scripts/getActiveItem';

const Menu: React.FunctionComponent = () => {
  let role: Role | null = null;

  role = getRole();

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary pl-5 pr-5"
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
  );
}

export default Menu;
