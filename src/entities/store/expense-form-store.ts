import { create } from 'zustand';
import type { ExpenseCategory, PaymentMethod } from '@/entities/types';

interface ExpenseFormState {
  step: 1 | 2 | 3 | 4;
  date: string;
  amount: string;
  paymentMethod: PaymentMethod | null;
  group: string | null;
  category: ExpenseCategory | null;
  memo: string;
  photos: string[];
  location: { name: string; isDomestic: boolean } | null;
}

interface ExpenseFormActions {
  setStep: (step: 1 | 2 | 3 | 4) => void;
  setDate: (date: string) => void;
  setAmount: (amount: string) => void;
  setPaymentMethod: (method: PaymentMethod) => void;
  setGroup: (group: string) => void;
  setCategory: (category: ExpenseCategory) => void;
  setMemo: (memo: string) => void;
  addPhoto: (photo: string) => void;
  removePhoto: (index: number) => void;
  setLocation: (location: { name: string; isDomestic: boolean }) => void;
  nextStep: () => void;
  prevStep: () => void;
  reset: () => void;
}

const initialState: ExpenseFormState = {
  step: 1,
  date: new Date().toISOString().split('T')[0],
  amount: '',
  paymentMethod: null,
  group: null,
  category: null,
  memo: '',
  photos: [],
  location: null,
};

export const useExpenseFormStore = create<
  ExpenseFormState & ExpenseFormActions
>()((set) => ({
  ...initialState,
  setStep: (step) => set({ step }),
  setDate: (date) => set({ date }),
  setAmount: (amount) => set({ amount }),
  setPaymentMethod: (method) => set({ paymentMethod: method }),
  setGroup: (group) => set({ group }),
  setCategory: (category) => set({ category }),
  setMemo: (memo) => set({ memo }),
  addPhoto: (photo) => set((state) => ({ photos: [...state.photos, photo] })),
  removePhoto: (index) =>
    set((state) => ({
      photos: state.photos.filter((_, i) => i !== index),
    })),
  setLocation: (location) => set({ location }),
  nextStep: () =>
    set((state) => ({
      step: Math.min(state.step + 1, 4) as 1 | 2 | 3 | 4,
    })),
  prevStep: () =>
    set((state) => ({
      step: Math.max(state.step - 1, 1) as 1 | 2 | 3 | 4,
    })),
  reset: () => set(initialState),
}));
