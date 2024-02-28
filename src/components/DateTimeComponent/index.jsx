import { useState, useEffect } from 'react';

const DateTimeComponent = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  const tick = () => {
    setCurrentDateTime(new Date());
  };

  return (
    <div style={{display: 'flex', gap: '10px'}}>
      <p>{currentDateTime.toLocaleTimeString()}</p>
      <p>{currentDateTime.toLocaleDateString()}</p>
    </div>
  );
};

export default DateTimeComponent;
