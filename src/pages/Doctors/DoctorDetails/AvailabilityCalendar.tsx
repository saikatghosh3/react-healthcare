import React from 'react';
import { Schedule } from '../types';

interface AvailabilityCalendarProps {
  schedule: Schedule[];
}

export const AvailabilityCalendar: React.FC<AvailabilityCalendarProps> = ({ schedule }) => {
  const next15Days = Array.from({ length: 15 }, (_, i) => {
    const date = new Date();
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {next15Days.map((date) => {
        const slots = getAvailableSlots(date);
        const dateString = date.toLocaleDateString('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric'
        });

        return (
          <div
            key={dateString}
            className={`p-4 rounded-lg border ${
              isToday(date) ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
            }`}
          >
            <div className="font-semibold mb-2">
              {dateString}
              {isToday(date) && (
                <span className="ml-2 text-sm text-blue-600">(Today)</span>
              )}
            </div>
            
            {slots.length > 0 ? (
              <div className="grid grid-cols-2 gap-2">
                {slots.map((slot) => (
                  <div
                    key={slot}
                    className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded text-center"
                  >
                    {slot}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500 text-center">Not available</p>
            )}
          </div>
        );
      })}
    </div>
  );
};