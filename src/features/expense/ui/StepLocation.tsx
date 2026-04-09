'use client';

import { useRouter } from 'next/navigation';
import { useExpenseFormStore } from '@/entities/store';
import { Button } from '@/shared/ui/@atoms';
import { Chip } from '@/shared/ui/@atoms';
import { Divider } from '@/shared/ui/@atoms';
import { Input } from '@/shared/ui/@atoms';

export default function StepLocation() {
  const router = useRouter();
  const { amount, group, category, memo, location, setLocation, reset } =
    useExpenseFormStore();

  const isDomestic = location?.isDomestic ?? true;

  const handleComplete = () => {
    // In production, this would save to Supabase
    reset();
    router.push('/expense');
  };

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

      {/* Memo Summary */}
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-base font-semibold">Memo</h3>
        <button
          type="button"
          className="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-600"
        >
          + Add Photo
        </button>
      </div>
      {memo && <p className="mb-4 text-sm text-gray-500">{memo}</p>}

      {/* Location Section */}
      <div>
        <div className="mb-3 flex items-center gap-3">
          <h3 className="text-base font-semibold">Location</h3>
          <div className="flex gap-1">
            <Chip
              selected={isDomestic}
              onClick={() =>
                setLocation({
                  name: location?.name || '',
                  isDomestic: true,
                })
              }
            >
              Domestic
            </Chip>
            <Chip
              selected={!isDomestic}
              onClick={() =>
                setLocation({
                  name: location?.name || '',
                  isDomestic: false,
                })
              }
            >
              Abroad
            </Chip>
          </div>
        </div>
        <Input
          placeholder="Add the location"
          value={location?.name || ''}
          onChange={(e) =>
            setLocation({
              name: e.target.value,
              isDomestic,
            })
          }
          icon={
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle
                cx="12"
                cy="10"
                r="3"
              />
            </svg>
          }
        />

        {/* Map Placeholder */}
        <div className="mt-4 flex h-40 items-center justify-center rounded-xl bg-gray-100">
          <span className="text-sm text-gray-400">map view</span>
        </div>
      </div>

      {/* Complete Button */}
      <div className="mt-auto pb-6 pt-6">
        <Button
          onClick={handleComplete}
          className="w-full rounded-xl bg-gray-900 py-4 text-white"
        >
          Complete
        </Button>
      </div>
    </div>
  );
}
