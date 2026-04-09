'use client';

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

interface MonthSelectorProps {
  month: number;
  onPrev: () => void;
  onNext: () => void;
  onToday: () => void;
}

export default function MonthSelector({
  month,
  onPrev,
  onNext,
  onToday,
}: MonthSelectorProps) {
  return (
    <div className="flex items-center justify-between px-5 py-3">
      <button
        type="button"
        onClick={onPrev}
        className="p-1"
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

      <div className="flex items-center gap-2">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect
            x="3"
            y="4"
            width="18"
            height="18"
            rx="2"
          />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
        <span className="text-base font-semibold">
          {MONTH_NAMES[month - 1]}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onToday}
          className="rounded-full border border-gray-300 px-3 py-1 text-xs font-medium"
        >
          today
        </button>
        <button
          type="button"
          onClick={onNext}
          className="p-1"
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
    </div>
  );
}
