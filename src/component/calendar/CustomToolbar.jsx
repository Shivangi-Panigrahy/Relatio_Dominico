// CustomToolbar.js
import React from 'react';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';

const CustomToolbar = ({date}) => {
  const dayOfWeek = date.toLocaleDateString("it-IT", { weekday: "long" });
  return (
    <div className="rbc-toolbar">
      
      <span className="rbc-toolbar-label">{dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1)}</span>
    </div>
  );
};

export default CustomToolbar;
