import type { User } from './user';

export interface Group {
  id: string;
  name: string;
  members: User[];
  color: string;
  totalAmount: number;
  currency: string;
}
