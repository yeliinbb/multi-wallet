'use client';

import { useMemo } from 'react';
import { DatePill } from '@/shared/ui/@molecules';

interface CalendarStripProps {
  year: number;
  month: number;
  selectedDate: number;
  today: number;
  expenseDates: Set<number>;
  onSelectDate: (date: number) => void;
}

export default function CalendarStrip({
  year,
  month,
  selectedDate,
  today,
  expenseDates,
  onSelectDate,
}: CalendarStripProps) {
  const daysInMonth = useMemo(
    () => new Date(year, month, 0).getDate(),
    [year, month],
  );

  const getVariant = (day: number) => {
    if (day === selectedDate) return 'active';
    if (day === today && month === new Date().getMonth() + 1) return 'today';
    if (expenseDates.has(day)) return 'default';
    return 'muted';
  };

  const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  // Get the week containing the selected date
  const selectedDayOfWeek = new Date(year, month - 1, selectedDate).getDay();
  const weekStart = selectedDate - selectedDayOfWeek;

  const visibleDays = Array.from({ length: 7 }, (_, i) => {
    const day = weekStart + i;
    if (day < 1 || day > daysInMonth) return null;
    return day;
  });

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
      <div className="flex justify-between">
        {visibleDays.map((day, i) =>
          day ? (
            <DatePill
              key={day}
              date={day}
              variant={getVariant(day)}
              onClick={() => onSelectDate(day)}
            />
          ) : (
            <div
              key={`empty-${i}`}
              className="h-10 w-10"
            />
          ),
        )}
      </div>
    </div>
  );
}
