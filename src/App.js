import React, { useEffect } from 'react';
import './style.css';
import useCountDownTimer from './hooks/useCountDownTimer';

export default function App() {
  function fn() {
    return () => console.log('Done');
  }

  const [count, start, reset, isRunning] = useCountDownTimer(fn, 5);

  //autostart on loading
  useEffect(() => {
    start();
  }, []);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      {isRunning ? `COUNT: ${count}` : `No timer running`}
      <p>
        <button onClick={start} disabled={isRunning}>
          start
        </button>
        <button onClick={reset} disabled={!isRunning}>
          reset
        </button>
      </p>
    </div>
  );
}
