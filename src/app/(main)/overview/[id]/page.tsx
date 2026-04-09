'use client';

import { useMemo } from 'react';
import { ExpenseListItem } from '@/shared/ui/@molecules';
import { MOCK_EXPENSES } from '@/shared/mocks';

export default function OverviewDetailPage() {
  const groupedExpenses = useMemo(() => {
    const groups: Record<string, typeof MOCK_EXPENSES> = {};
    MOCK_EXPENSES.forEach((exp) => {
      const date = new Date(exp.date);
      const key = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        weekday: 'short',
      });
      if (!groups[key]) groups[key] = [];
      groups[key].push(exp);
    });
    return Object.entries(groups);
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 py-4">
        <h1 className="text-xl font-semibold">Overview</h1>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6" />
          </svg>
        </button>
      </div>

      {groupedExpenses.map(([dateLabel, expenses]) => (
        <div
          key={dateLabel}
          className="mb-4"
        >
          <p className="px-5 py-2 text-sm font-medium text-gray-900">
            {dateLabel}
          </p>
          {expenses.map((expense) => (
            <ExpenseListItem
              key={expense.id}
              title={expense.title}
              subtitle={expense.location?.name}
              amount={expense.amount}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
