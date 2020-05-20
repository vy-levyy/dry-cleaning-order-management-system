import items from '../scripts/items';

export type Item = typeof items.signup;

export type ItemName = keyof typeof items;

export type Role = 'unlogged' | 'user' | 'admin';

export type ItemsByRole = {
  unlogged: ItemName[],
  user: ItemName[],
  admin: ItemName[]
}
