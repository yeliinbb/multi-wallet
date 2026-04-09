'use client';

interface DatePillProps {
  date: number;
  variant?: 'default' | 'today' | 'active' | 'muted';
  onClick?: () => void;
}

const variantStyles = {
  default: 'bg-gray-800 text-white',
  today: 'bg-yellow-300 text-gray-900',
  active: 'bg-gray-800 text-white',
  muted: 'border border-dashed border-gray-300 text-gray-400',
} as const;

export default function DatePill({
  date,
  variant = 'default',
  onClick,
}: DatePillProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-medium transition-colors ${variantStyles[variant]}`}
    >
      {date}
    </button>
  );
}
