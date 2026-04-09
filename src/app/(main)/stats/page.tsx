'use client';

import { useMemo, useState } from 'react';
import { Header } from '@/shared/ui/@molecules';
import { Chip } from '@/shared/ui/@atoms';
import { MOCK_EXPENSES } from '@/shared/mocks';
import SpendingDonutChart from '@/features/stats/ui/SpendingDonutChart';

const FILTERS = ['Spending', 'Income', 'Type', 'Type'];
const CATEGORY_COLORS: Record<string, string> = {
  food: '#86C166',
  shopping: '#B8A9C9',
  culture: '#F5C542',
  transport: '#4A90D9',
  hobby: '#E85D3A',
  drinks: '#C75B7A',
  coffee: '#8B6914',
  other: '#999999',
};

export default function StatsPage() {
  const [activeFilter, setActiveFilter] = useState('Spending');

  const stats = useMemo(() => {
    const categoryTotals: Record<string, number> = {};
    let totalSpent = 0;

    MOCK_EXPENSES.forEach((exp) => {
      if (exp.amount < 0) {
        const amt = Math.abs(exp.amount);
        categoryTotals[exp.category] =
          (categoryTotals[exp.category] || 0) + amt;
        totalSpent += amt;
      }
    });

    const chartData = Object.entries(categoryTotals).map(([cat, amount]) => ({
      label: cat.charAt(0).toUpperCase() + cat.slice(1),
      amount,
      color: CATEGORY_COLORS[cat] || '#999',
    }));

    return { totalSpent, chartData };
  }, []);

  return (
    <div className="flex flex-col">
      <Header variant="main" />

      <div className="px-5 pt-2">
        <h1 className="font-[family-name:var(--font-neue-haas-grotesk)] text-2xl font-bold">
          Spending Analysis
        </h1>
      </div>

      {/* Filter Chips */}
      <div className="mt-4 flex gap-2 overflow-x-auto px-5">
        {FILTERS.map((filter, i) => (
          <Chip
            key={`${filter}-${i}`}
            selected={activeFilter === filter && i === 0}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </Chip>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-6 px-5">
        <p className="text-sm text-gray-600">You spent</p>
        <p className="text-2xl font-bold">
          ₩{stats.totalSpent.toLocaleString()}
        </p>
        <p className="text-sm text-gray-500">in October</p>
      </div>

      {/* Donut Chart */}
      <div className="mt-6 flex items-center justify-center px-5">
        <button
          type="button"
          className="p-2 text-gray-400"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 15l-5-5 5-5" />
          </svg>
        </button>
        <SpendingDonutChart
          data={stats.chartData}
          year={2024}
        />
        <button
          type="button"
          className="p-2 text-gray-400"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M8 5l5 5-5 5" />
          </svg>
        </button>
      </div>

      {/* Insight */}
      <div className="mt-8 px-5">
        <p className="text-sm text-gray-600">
          The most you spent is{' '}
          <span className="font-semibold">{stats.chartData[0]?.label}</span>.
        </p>
      </div>
    </div>
  );
}
