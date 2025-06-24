import { useEffect, useRef, useState } from 'react';

export default function AnimatedNumber({ value = 0, duration = 2000 }) {
  const ref = useRef(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let start = 0;
    const startTime = performance.now();

    const step = (timestamp) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const number = Math.floor(progress * value);
      setCurrent(number);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [value, duration]);

  return <span ref={ref}>{current.toLocaleString()}</span>;
}
