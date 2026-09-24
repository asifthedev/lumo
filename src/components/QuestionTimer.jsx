import { useEffect, useState } from 'react';

function QuestionTimer({ timeout, color }) {
  const [scaleX, setScaleX] = useState(1);

  // Start the progress animation after the initial render.
  useEffect(() => {
    const raf = requestAnimationFrame(() => setScaleX(0));

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      className="h-full transition-transform ease-linear origin-left"
      style={{
        background: `${color}`,
        transform: `scaleX(${scaleX})`,
        transitionDuration: `${timeout}ms`,
      }}
    />
  );
}

export default QuestionTimer;
