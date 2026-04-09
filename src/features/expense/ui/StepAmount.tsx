'use client';

import { useState } from 'react';
import { useExpenseFormStore } from '@/entities/store';
import { Chip } from '@/shared/ui/@atoms';
import { Button } from '@/shared/ui/@atoms';
import { NumericKeypad } from '@/shared/ui/@organisms';
import { MiniCalendar } from '@/shared/ui/@organisms';
import type { PaymentMethod } from '@/entities/types';

const PAYMENT_METHODS: { id: PaymentMethod; label: string }[] = [
  { id: 'cash', label: 'Cash' },
  { id: 'transfer', label: 'Transfer' },
  { id: 'debit_card', label: 'Debit Card' },
  { id: 'credit_card', label: 'Credit Card' },
];

export default function StepAmount() {
  const {
    date,
    amount,
    paymentMethod,
    setDate,
    setAmount,
    setPaymentMethod,
    nextStep,
  } = useExpenseFormStore();
  const [showCalendar, setShowCalendar] = useState(false);

  const handleKeyPress = (key: string) => {
    if (key === '.' && amount.includes('.')) return;
    setAmount(amount + key);
  };

  const handleDelete = () => {
    setAmount(amount.slice(0, -1));
  };

  const displayAmount = amount || '0';

  return (
    <div className="flex flex-1 flex-col px-5 pt-4">
      {/* Date & Shortcut */}
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => setShowCalendar(!showCalendar)}
          className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700"
        >
          {date}
        </button>
        <button
          type="button"
          className="flex items-center gap-1 text-xs text-gray-500"
        >
          <span>+</span> Load Shortcut
        </button>
      </div>

      {showCalendar && (
        <div className="mt-2">
          <MiniCalendar
            selectedDate={new Date(date)}
            onSelect={(d) => setDate(d.toISOString().split('T')[0])}
            onClose={() => setShowCalendar(false)}
          />
        </div>
      )}

      {/* Amount Display */}
      <div className="mt-8 flex items-center justify-between">
        <span className="text-lg font-medium text-gray-500">Amount</span>
        <button
          type="button"
          className="flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-1.5 text-xs"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="2"
            />
            <path d="M7 7h.01M7 12h10" />
          </svg>
          Scan
        </button>
      </div>

      <div className="mt-4 flex items-baseline justify-center gap-1">
        <span className="text-4xl font-bold tracking-tight">
          -{' '}
          {Number(displayAmount).toLocaleString('en-US', {
            minimumFractionDigits: displayAmount.includes('.') ? 2 : 0,
          })}
        </span>
        <span className="text-2xl font-light text-gray-400">₩</span>
      </div>

      {/* Payment Methods */}
      <div className="mt-6 flex flex-wrap gap-2">
        {PAYMENT_METHODS.map((method) => (
          <Chip
            key={method.id}
            selected={paymentMethod === method.id}
            onClick={() => setPaymentMethod(method.id)}
          >
            {paymentMethod === method.id && <span className="mr-1">●</span>}
            {method.label}
          </Chip>
        ))}
      </div>

      {/* Continue Button */}
      <div className="mt-auto pb-4 pt-6">
        <Button
          onClick={nextStep}
          disabled={!amount || !paymentMethod}
          className="w-full rounded-xl bg-gray-900 py-4 text-white disabled:opacity-40"
        >
          Continue
        </Button>
      </div>

      {/* Keypad */}
      <NumericKeypad
        onKeyPress={handleKeyPress}
        onDelete={handleDelete}
      />
    </div>
  );
}
