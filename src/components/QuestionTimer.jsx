import { useState, useEffect } from 'react';

export default function QuestionTimer({ onTimeout, timeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log('TIMER');
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log('INTERVAL');
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTimer) => prevRemainingTimer - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      id="question-time"
      max={timeout}
      value={remainingTime}
      className={mode}
    />
  );
}
