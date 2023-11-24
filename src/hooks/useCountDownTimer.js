import { useState, useRef, useEffect } from 'react';

export default function useCountDownTimer(cb, initial) {
  const [count, setCount] = useState(initial);
  const [isRunning, setIsRunning] = useState(false);

  let timerID = useRef();

  //on mount & unmount scenario
  useEffect(() => {
    clearInterval(timerID.current);
  }, []);

  useEffect(() => {
    if (count <= 0) {
      reset();
      cb();
    }
  }, [count]);

  function start() {
    timerID.current = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    setIsRunning(true);
  }

  function reset() {
    setCount(initial);
    clearInterval(timerID.current);
    setIsRunning(false);
  }

  return [count, start, reset, isRunning];
}
