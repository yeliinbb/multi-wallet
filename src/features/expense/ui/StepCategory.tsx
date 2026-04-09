'use client';

import { useExpenseFormStore } from '@/entities/store';
import { Button } from '@/shared/ui/@atoms';
import { Divider } from '@/shared/ui/@atoms';
import { CategoryIcon } from '@/shared/ui/@molecules';
import { CATEGORIES } from '@/shared/mocks';

export default function StepCategory() {
  const { amount, group, category, setGroup, setCategory, nextStep } =
    useExpenseFormStore();

  return (
    <div className="flex flex-1 flex-col px-5 pt-4">
      {/* Confirmed Amount */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#22c55e"
            strokeWidth="2.5"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
          <span className="text-sm text-gray-500">Amount</span>
        </div>
        <span className="text-sm font-semibold">
          -{Number(amount).toLocaleString()} ₩
        </span>
      </div>

      <Divider className="my-4" />

      {/* Group Selection */}
      <div className="mb-6">
        <h3 className="mb-3 text-lg font-semibold">Group</h3>
        <select
          value={group || ''}
          onChange={(e) => setGroup(e.target.value)}
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700"
        >
          <option value="">Select or create a group</option>
          <option value="personal">Personal</option>
          <option value="trip-bali">Trip to Bali</option>
          <option value="jeju">Jeju Island</option>
          <option value="tokyo">Tokyo</option>
        </select>
      </div>

      {/* Category Selection */}
      <div>
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Category</h3>
          <button
            type="button"
            className="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-600"
          >
            + Add
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {CATEGORIES.map((cat) => (
            <CategoryIcon
              key={cat.id}
              label={cat.label}
              selected={category === cat.id}
              onSelect={() => setCategory(cat.id)}
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <rect
                    x="4"
                    y="4"
                    width="16"
                    height="16"
                    rx="2"
                    opacity="0.5"
                  />
                </svg>
              }
            />
          ))}
        </div>
      </div>

      {/* Continue Button */}
      <div className="mt-auto pb-6 pt-6">
        <Button
          onClick={nextStep}
          disabled={!category}
          className="w-full rounded-xl bg-gray-900 py-4 text-white disabled:opacity-40"
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
