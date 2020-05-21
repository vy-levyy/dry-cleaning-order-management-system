import items from '../scripts/items';
import { Role } from '../../../types';

export type Item = typeof items.signup;

export type ItemName = keyof typeof items;

export type ItemsByRole = {
  [key in Role]: ItemName[];
}
