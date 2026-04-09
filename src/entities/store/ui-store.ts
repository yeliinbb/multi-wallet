import { create } from 'zustand';

interface UIState {
  isSearchOpen: boolean;
  calendarView: 'weekly' | 'monthly';
  toggleSearch: () => void;
  setCalendarView: (view: 'weekly' | 'monthly') => void;
}

export const useUIStore = create<UIState>()((set) => ({
  isSearchOpen: false,
  calendarView: 'weekly',
  toggleSearch: () => set((state) => ({ isSearchOpen: !state.isSearchOpen })),
  setCalendarView: (view) => set({ calendarView: view }),
}));
