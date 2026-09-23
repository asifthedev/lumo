import { useEffect, useState } from 'react';

function QuestionTimer({ timeout, onTimerExpire, color }) {
  const [scaleX, setScaleX] = useState(1);

  // Advance the quiz when the current question reaches its time limit.
  useEffect(() => {
    const timer = setTimeout(onTimerExpire, timeout);

    return () => clearTimeout(timer);
  }, [timeout, onTimerExpire]);

  // Start the progress animation after the initial render.
  useEffect(() => {
    const raf = requestAnimationFrame(() => setScaleX(0));

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="w-full h-2 rounded-full bg-track mb-9 overflow-hidden">
      <div
        className="h-full transition-transform ease-linear origin-left"
        style={{
          background: `${color}`,
          transform: `scaleX(${scaleX})`,
          transitionDuration: `${timeout}ms`,
        }}
      />
    </div>
  );
}

export default QuestionTimer;
