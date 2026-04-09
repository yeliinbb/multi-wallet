'use client';

import { useMemo, useState } from 'react';

interface MiniCalendarProps {
  selectedDate: Date;
  onSelect: (date: Date) => void;
  onClose: () => void;
}

export default function MiniCalendar({
  selectedDate,
  onSelect,
  onClose,
}: MiniCalendarProps) {
  const [viewYear, setViewYear] = useState(selectedDate.getFullYear());
  const [viewMonth, setViewMonth] = useState(selectedDate.getMonth());

  const daysInMonth = useMemo(
    () => new Date(viewYear, viewMonth + 1, 0).getDate(),
    [viewYear, viewMonth],
  );

  const firstDayOfWeek = useMemo(
    () => new Date(viewYear, viewMonth, 1).getDay(),
    [viewYear, viewMonth],
  );

  const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  const cells: (number | null)[] = [
    ...Array.from({ length: firstDayOfWeek }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const monthNames = [
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

  const prevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear(viewYear - 1);
    } else {
      setViewMonth(viewMonth - 1);
    }
  };

  const nextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear(viewYear + 1);
    } else {
      setViewMonth(viewMonth + 1);
    }
  };

  const isSelected = (day: number) =>
    day === selectedDate.getDate() &&
    viewMonth === selectedDate.getMonth() &&
    viewYear === selectedDate.getFullYear();

  const isToday = (day: number) => {
    const now = new Date();
    return (
      day === now.getDate() &&
      viewMonth === now.getMonth() &&
      viewYear === now.getFullYear()
    );
  };

  return (
    <div className="w-56 rounded-xl bg-white p-4 shadow-lg">
      <div className="mb-3 flex items-center justify-between">
        <button
          type="button"
          onClick={prevMonth}
          className="p-1"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M10 12L6 8l4-4" />
          </svg>
        </button>
        <span className="text-sm font-medium">
          {monthNames[viewMonth]} {viewYear}
        </span>
        <button
          type="button"
          onClick={nextMonth}
          className="p-1"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 4l4 4-4 4" />
          </svg>
        </button>
      </div>

      <div className="mb-1 grid grid-cols-7 gap-0.5">
        {weekDays.map((d) => (
          <span
            key={d}
            className="text-center text-[10px] text-gray-400"
          >
            {d}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-0.5">
        {cells.map((day, i) =>
          day ? (
            <button
              key={day}
              type="button"
              onClick={() => {
                onSelect(new Date(viewYear, viewMonth, day));
                onClose();
              }}
              className={`flex h-7 w-7 items-center justify-center rounded-full text-xs ${
                isSelected(day)
                  ? 'bg-gray-900 text-white'
                  : isToday(day)
                    ? 'bg-gray-200 font-medium text-gray-900'
                    : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {day}
            </button>
          ) : (
            <div
              key={`e-${i}`}
              className="h-7 w-7"
            />
          ),
        )}
      </div>
    </div>
  );
}
