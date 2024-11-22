// CustomDayHeader.js
import React from 'react';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';

const CustomDayHeader = ({ label, date }) => {
  const dayName = format(date, 'EEEE', { locale: it }); // "EEEE" for full day name in Italian
  return (
    <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
      {dayName} {label} {/* This will display the full day name with the date */}
    </div>
  );
};

export default CustomDayHeader;
