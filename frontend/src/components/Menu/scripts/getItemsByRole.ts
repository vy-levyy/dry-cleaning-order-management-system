import items from './items';
import { ItemName, ItemsByRole, Role } from '../types';

export default (role: Role) => {
  const itemsByRole: ItemsByRole = {
    unlogged: ['signin', 'signup', 'passwordRecovery'],
    user: [],
    admin: []
  };

  return itemsByRole[role].map((item: ItemName) => {
    return items[item];
  });
}
