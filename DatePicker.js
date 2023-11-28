import React, { useState } from 'react';

const DatePicker = ({ minDate, maxDate }) => {
  const today = new Date().toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState(today);

  return (
    <input 
      type="date" 
      value={selectedDate} 
      min={minDate}  // 使用 props 中的最小日期
      max={maxDate}  // 使用 props 中的最大日期
      onChange={(e) => setSelectedDate(e.target.value)}
    />
  );
};

export default DatePicker;
