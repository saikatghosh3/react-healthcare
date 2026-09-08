import React from 'react';
import { CalendarX, Clock } from 'lucide-react';
import { Schedule } from '../types';

interface AvailabilityCalendarProps {
  schedule: Schedule[];
  onSelectSlot?: (date: Date, slot: string) => void;
}

export const AvailabilityCalendar: React.FC<AvailabilityCalendarProps> = ({
  schedule,
  onSelectSlot,
}) => {
  const next15Days = Array.from({ length: 15 }, (_, i) => {
    const date = new Date();
    date.setHours(12, 0, 0, 0);
    date.setDate(date.getDate() + i);
    return date;
  });

  const getAvailableSlots = (date: Date) => {
    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
    return schedule.find(s => s.day === dayOfWeek)?.slots || [];
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {next15Days.map((date) => {
        const slots = getAvailableSlots(date);
        const weekday = date.toLocaleDateString('en-US', { weekday: 'short' });
        const monthDay = date.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
        });
        const isUnavailable = slots.length === 0;

        return (
          <div
            key={date.toDateString()}
            className={`rounded-xl border p-3 transition-colors ${
              isToday(date)
                ? 'border-blue-300 bg-blue-50/60'
                : isUnavailable
                  ? 'border-slate-100 bg-slate-50/50'
                  : 'border-slate-100 bg-white hover:border-blue-200'
            }`}
          >
            <div className="mb-3 flex items-start justify-between gap-2">
              <div>
                <p className="text-sm font-bold text-slate-700">{weekday}</p>
                <p className="text-xs font-medium text-slate-400">{monthDay}</p>
              </div>
              {isToday(date) && (
                <span className="rounded-full bg-blue-600 px-2 py-0.5 text-[0.65rem] font-bold text-white">
                  Today
                </span>
              )}
            </div>

            {slots.length > 0 ? (
              <div className="flex flex-wrap gap-1.5">
                {slots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => onSelectSlot?.(date, slot)}
                    className="inline-flex items-center gap-1 rounded-lg bg-blue-50 px-2.5 py-1.5 text-xs font-bold text-blue-700 ring-1 ring-blue-100 transition-all hover:-translate-y-0.5 hover:bg-blue-600 hover:text-white hover:shadow-card"
                  >
                    <Clock className="h-3 w-3" />
                    {slot}
                  </button>
                ))}
              </div>
            ) : (
              <p className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-2.5 py-2 text-xs font-semibold text-slate-400">
                <CalendarX className="h-3.5 w-3.5" />
                Not available
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};