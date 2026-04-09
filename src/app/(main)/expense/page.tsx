'use client';

import { useMemo, useState } from 'react';
import { Header } from '@/shared/ui/@molecules';
import { ExpenseListItem } from '@/shared/ui/@molecules';
import { EmptyState } from '@/shared/ui/@molecules';
import { CalendarStrip } from '@/shared/ui/@organisms';
import { CalendarGrid } from '@/shared/ui/@organisms';
import { Input } from '@/shared/ui/@atoms';
import { useUIStore } from '@/entities/store';
import { MOCK_EXPENSES } from '@/shared/mocks';
import MonthSelector from '@/features/expense/ui/MonthSelector';

export default function ExpensePage() {
  const now = new Date();
  const [year, setYear] = useState(2024);
  const [month, setMonth] = useState(10); // October
  const [selectedDate, setSelectedDate] = useState(2);
  const { isSearchOpen, toggleSearch, calendarView, setCalendarView } =
    useUIStore();
  const [searchQuery, setSearchQuery] = useState('');

  const expenseDates = useMemo(() => {
    const dates = new Set<number>();
    MOCK_EXPENSES.forEach((e) => {
      const d = new Date(e.date);
      if (d.getFullYear() === year && d.getMonth() + 1 === month) {
        dates.add(d.getDate());
      }
    });
    return dates;
  }, [year, month]);

  const filteredExpenses = useMemo(() => {
    const dateStr = `${year}-${String(month).padStart(2, '0')}-${String(selectedDate).padStart(2, '0')}`;
    let expenses = MOCK_EXPENSES.filter((e) => e.date === dateStr);
    if (searchQuery) {
      expenses = expenses.filter((e) =>
        e.title.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }
    return expenses;
  }, [year, month, selectedDate, searchQuery]);

  const prevMonth = () => {
    if (month === 1) {
      setMonth(12);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const nextMonth = () => {
    if (month === 12) {
      setMonth(1);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const goToday = () => {
    setYear(now.getFullYear());
    setMonth(now.getMonth() + 1);
    setSelectedDate(now.getDate());
  };

  return (
    <div className="flex flex-col">
      <Header variant="main" />

      <MonthSelector
        month={month}
        onPrev={prevMonth}
        onNext={nextMonth}
        onToday={goToday}
      />

      {/* Calendar View Toggle */}
      <div className="mb-4">
        {calendarView === 'weekly' ? (
          <div
            onClick={() => setCalendarView('monthly')}
            className="w-full"
          >
            <CalendarStrip
              year={year}
              month={month}
              selectedDate={selectedDate}
              today={now.getDate()}
              expenseDates={expenseDates}
              onSelectDate={setSelectedDate}
            />
          </div>
        ) : (
          <div>
            <CalendarGrid
              year={year}
              month={month}
              selectedDate={selectedDate}
              today={now.getDate()}
              expenseDates={expenseDates}
              onSelectDate={(d) => {
                setSelectedDate(d);
                setCalendarView('weekly');
              }}
            />
          </div>
        )}
      </div>

      {/* Expenses Section */}
      <section className="mt-2 flex-1 rounded-t-3xl bg-white px-0 pt-5">
        <div className="flex items-center justify-between px-5">
          <h2 className="text-lg font-semibold">Expenses</h2>
          <button
            type="button"
            onClick={toggleSearch}
            className="p-1 text-gray-500"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle
                cx="11"
                cy="11"
                r="8"
              />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </button>
        </div>

        {isSearchOpen && (
          <div className="mt-3 px-5">
            <Input
              placeholder="Search your expense"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              icon={
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle
                    cx="11"
                    cy="11"
                    r="8"
                  />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              }
              iconPosition="left"
            />
          </div>
        )}

        <div className="mt-3">
          {filteredExpenses.length > 0 ? (
            filteredExpenses.map((expense) => (
              <ExpenseListItem
                key={expense.id}
                title={expense.title}
                subtitle={expense.location?.name}
                amount={expense.amount}
              />
            ))
          ) : (
            <EmptyState
              message="There is no expense yet."
              submessage="Add your expense!"
            />
          )}
        </div>
      </section>
    </div>
  );
}
