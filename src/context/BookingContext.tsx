import React, { createContext, useContext, useState } from 'react';

interface BookingContextType {
  pendingBooking: {
    doctorId: string | null;
    returnPath: string;
  };
  setPendingBooking: (booking: { doctorId: string | null; returnPath: string }) => void;
}

const BookingContext = createContext<BookingContextType>({
  pendingBooking: { doctorId: null, returnPath: '' },
  setPendingBooking: () => {},
});

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [pendingBooking, setPendingBooking] = useState<{ doctorId: string | null; returnPath: string }>({
    doctorId: null,
    returnPath: '',
  });

  return (
    <BookingContext.Provider value={{ pendingBooking, setPendingBooking }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => useContext(BookingContext);