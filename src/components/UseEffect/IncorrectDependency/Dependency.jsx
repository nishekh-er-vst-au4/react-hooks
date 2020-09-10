import React, { useState, useEffect } from "react";

function IntervalHookCounter() {
  const [count, setCount] = useState(0);

  //   const tick = () => {
  //     setCount((prevCount) => prevCount + 1);  it will also work
  //   };

  useEffect(() => {
    function tick() {
      setCount(count + 1);
    }
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);
  return <div>{count}</div>;
}

export default IntervalHookCounter;

/**
 * 
 * const tick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if you are not added dependency in array using prevCount it will monitor continuosly

  the second method if you are written in function which is needed to useEffect
  useEffect(() => {
    function tick() {
      setCount(count + 1);
    }
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);
 */
