import items from './items';
import { ItemName, ItemsByRole } from '../types';
import { Role } from '../../../types';


export default (role: Role | null) => {
  const itemsByRole: ItemsByRole = {
    unlogged: ['signin', 'signup', 'passwordRecovery'],
    user: ['cleaners', 'myOrders'],
    admin: ['cleaners', 'addCleaner']
  };

  if (role === null) {
    return null;
  }

  return itemsByRole[role].map((item: ItemName) => {
    return items[item];
  });
}
