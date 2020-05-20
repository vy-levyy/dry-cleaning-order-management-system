import React from 'react';
import { Link } from 'react-router-dom';
import { Item, ItemName } from '../types';

type Props = {
  list: Item[];
  activeItem: ItemName;
}

const MenuList: React.FunctionComponent<Props> = ({
  list,
  activeItem
}) => {
  const itemElements = list.map((item: Item, index) => {
    const activeClass = activeItem === item.name ? 'active' : '';

    return (
      <a
        className={ `dropdown-item ${ activeClass }` }
        href={ item.link }
        key={ index * 100 }
      >
        { item.description }
      </a>
    );
  });
  return (
    <div className="dropdown-menu">
      { itemElements }
    </div>
  );
}

export default MenuList;
