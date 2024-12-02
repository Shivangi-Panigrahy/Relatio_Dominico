// OrganizzaView.jsx
import React from 'react';
import ReactBigCalendar from '../../../component/HrCalendar/HrCalendar';

const OrganizzaView = () => {
  return (
    <div className="calenderCard">
      <ReactBigCalendar hr={true} hrView={true} />
    </div>
  );
};

export default OrganizzaView;
