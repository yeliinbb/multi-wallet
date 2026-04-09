'use client';

import { useMemo } from 'react';
import { DatePill } from '@/shared/ui/@molecules';

interface CalendarGridProps {
  year: number;
  month: number;
  selectedDate: number;
  today: number;
  expenseDates: Set<number>;
  onSelectDate: (date: number) => void;
}

export default function CalendarGrid({
  year,
  month,
  selectedDate,
  today,
  expenseDates,
  onSelectDate,
}: CalendarGridProps) {
  const daysInMonth = useMemo(
    () => new Date(year, month, 0).getDate(),
    [year, month],
  );

  const firstDayOfWeek = useMemo(
    () => new Date(year, month - 1, 1).getDay(),
    [year, month],
  );

  const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const getVariant = (day: number) => {
    if (day === selectedDate) return 'active';
    if (day === today && month === new Date().getMonth() + 1) return 'today';
    if (expenseDates.has(day)) return 'default';
    return 'muted';
  };

  const cells: (number | null)[] = [
    ...Array.from({ length: firstDayOfWeek }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const totalCells = Math.ceil(cells.length / 7) * 7;
  while (cells.length < totalCells) {
    cells.push(null);
  }

  const weeks: (number | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) {
    weeks.push(cells.slice(i, i + 7));
  }

  return (
    <div className="px-5">
      <div className="mb-2 flex justify-between">
        {weekDays.map((day, i) => (
          <span
            key={`${day}-${i}`}
            className="flex w-10 justify-center text-xs text-gray-400"
          >
            {day}
          </span>
        ))}
      </div>
      <div className="flex flex-col gap-1">
        {weeks.map((week, wi) => (
          <div
            key={wi}
            className="flex justify-between"
          >
            {week.map((day, di) =>
              day ? (
                <DatePill
                  key={day}
                  date={day}
                  variant={getVariant(day)}
                  onClick={() => onSelectDate(day)}
                />
              ) : (
                <div
                  key={`empty-${wi}-${di}`}
                  className="h-10 w-10"
                />
              ),
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
