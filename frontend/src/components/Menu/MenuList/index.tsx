import React from 'react';
import { Link } from 'react-router-dom';
import { Item, ItemName } from '../types';

type Props = {
  list: Item[] | null;
  activeItem: ItemName | null;
}

const MenuList: React.FunctionComponent<Props> = ({
  list,
  activeItem
}) => {
  const itemElements = list?.map((item: Item, index) => {
    const activeClass = activeItem === item.name ? 'active' : '';

    return (
      <Link
        className={ `dropdown-item ${ activeClass }` }
        to={ { pathname: item.link } }
        key={ item.description }
      >
        { item.description }
      </Link>
    );
  });
  return (
    <div className="dropdown-menu">
      { itemElements || '' }
    </div>
  );
}

export default MenuList;
