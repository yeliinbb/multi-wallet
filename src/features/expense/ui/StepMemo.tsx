'use client';

import { useExpenseFormStore } from '@/entities/store';
import { Button } from '@/shared/ui/@atoms';
import { Divider } from '@/shared/ui/@atoms';
import { Input } from '@/shared/ui/@atoms';

export default function StepMemo() {
  const { amount, group, category, memo, photos, setMemo, addPhoto, nextStep } =
    useExpenseFormStore();

  return (
    <div className="flex flex-1 flex-col px-5 pt-4">
      {/* Confirmed Fields */}
      <div className="space-y-3">
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
            <span className="text-sm text-gray-500">Group</span>
          </div>
          <span className="text-sm font-semibold capitalize">
            {group || 'Personal'}
          </span>
        </div>

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
            <span className="text-sm text-gray-500">Category</span>
          </div>
          <span className="text-sm font-semibold capitalize">{category}</span>
        </div>
      </div>

      <Divider className="my-5" />

      {/* Memo Section */}
      <div>
        <h3 className="mb-3 text-lg font-semibold">Memo</h3>
        <Input
          placeholder="Write a description"
          value={memo}
          onChange={(e) => setMemo(e.target.value)}
        />

        {/* Photo Upload Area */}
        <div className="mt-4 flex gap-2">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="h-16 w-16 rounded-lg bg-gray-200"
            />
          ))}
          <button
            type="button"
            onClick={() => addPhoto('placeholder')}
            className="flex h-16 w-16 items-center justify-center rounded-lg border-2 border-dashed border-gray-300 text-gray-400"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </button>
        </div>
      </div>

      {/* Continue Button */}
      <div className="mt-auto pb-6 pt-6">
        <Button
          onClick={nextStep}
          className="w-full rounded-xl bg-gray-900 py-4 text-white"
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
