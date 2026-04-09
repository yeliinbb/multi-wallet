'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Header } from '@/shared/ui/@molecules';
import { EmptyState } from '@/shared/ui/@molecules';
import { ExpenseListItem } from '@/shared/ui/@molecules';
import { Input } from '@/shared/ui/@atoms';
import { MOCK_GROUPS, MOCK_EXPENSES } from '@/shared/mocks';
import TabBar from '@/features/overview/ui/TabBar';
import OverviewCard from '@/features/overview/ui/OverviewCard';

export default function OverviewPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('Personal');
  const [searchQuery, setSearchQuery] = useState('');

  const personalExpenses = useMemo(() => {
    const grouped: Record<string, typeof MOCK_EXPENSES> = {};
    MOCK_EXPENSES.forEach((exp) => {
      const d = new Date(exp.date);
      const key = d.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        weekday: 'short',
      });
      if (!grouped[key]) grouped[key] = [];
      grouped[key].push(exp);
    });
    return Object.entries(grouped);
  }, []);

  const groups = MOCK_GROUPS;

  return (
    <div className="flex flex-col">
      <Header variant="main" />

      <div className="px-5">
        <TabBar
          tabs={['Personal', 'Group']}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </div>

      <div className="mt-4 flex items-center gap-3 px-5">
        <div className="flex-1">
          <Input
            placeholder="Search your expense"
            iconPosition="left"
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
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200"
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

      <div className="mt-4 flex-1 px-5">
        {activeTab === 'Personal' ? (
          personalExpenses.length > 0 ? (
            <div>
              {personalExpenses.map(([dateLabel, expenses]) => (
                <div
                  key={dateLabel}
                  className="mb-4"
                >
                  <p className="py-2 text-sm font-medium text-gray-900">
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
          ) : (
            <EmptyState
              message="There is no expense yet."
              submessage="Add your expense!"
            />
          )
        ) : groups.length > 0 ? (
          <div className="space-y-4">
            {groups.map((group) => (
              <OverviewCard
                key={group.id}
                group={group}
                onClick={() => router.push(`/overview/${group.id}`)}
              />
            ))}
          </div>
        ) : (
          <EmptyState
            message="There is no expense yet."
            submessage="Add your expense!"
          />
        )}
      </div>
    </div>
  );
}
