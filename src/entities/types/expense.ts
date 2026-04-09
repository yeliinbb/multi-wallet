export type PaymentMethod = 'cash' | 'transfer' | 'debit_card' | 'credit_card';

export type ExpenseCategory =
  | 'food'
  | 'hobby'
  | 'culture'
  | 'shopping'
  | 'transport'
  | 'drinks'
  | 'coffee'
  | 'other';

export interface Expense {
  id: string;
  title: string;
  amount: number;
  currency: string;
  date: string;
  paymentMethod: PaymentMethod;
  category: ExpenseCategory;
  group?: string;
  memo?: string;
  photos?: string[];
  location?: {
    name: string;
    lat: number;
    lng: number;
    isDomestic: boolean;
  };
  createdAt: string;
  updatedAt: string;
}

export interface CategoryItem {
  id: ExpenseCategory;
  label: string;
  icon: string;
}
