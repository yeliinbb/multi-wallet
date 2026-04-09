'use client';

import { useState } from 'react';

interface ExpenseListItemProps {
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
  amount: number;
  currency?: string;
  onEdit?: () => void;
  onDelete?: () => void;
}

export default function ExpenseListItem({
  icon,
  title,
  subtitle,
  amount,
  currency = '₩',
  onEdit,
  onDelete,
}: ExpenseListItemProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isPositive = amount > 0;
  const formattedAmount = `${isPositive ? '+' : '-'} ${Math.abs(amount).toLocaleString('en-US', { minimumFractionDigits: 1 })} ${currency}`;

  return (
    <div className="flex items-center gap-3 px-5 py-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100">
        {icon ?? (
          <span className="text-sm font-medium text-gray-500">
            {title.charAt(0)}
          </span>
        )}
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-900">{title}</p>
        {subtitle && <p className="text-xs text-gray-400">{subtitle}</p>}
      </div>
      <span
        className={`text-sm font-semibold ${isPositive ? 'text-green-600' : 'text-gray-900'}`}
      >
        {formattedAmount}
      </span>
      <div className="relative">
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-6 w-6 items-center justify-center text-gray-400"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <circle
              cx="3"
              cy="8"
              r="1.5"
            />
            <circle
              cx="8"
              cy="8"
              r="1.5"
            />
            <circle
              cx="13"
              cy="8"
              r="1.5"
            />
          </svg>
        </button>
        {menuOpen && (
          <div className="absolute right-0 top-full z-10 mt-1 w-24 rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                onEdit?.();
              }}
              className="flex w-full items-center gap-2 px-3 py-2 text-xs text-gray-700 hover:bg-gray-50"
            >
              edit
            </button>
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                onDelete?.();
              }}
              className="flex w-full items-center gap-2 px-3 py-2 text-xs text-red-500 hover:bg-gray-50"
            >
              delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
