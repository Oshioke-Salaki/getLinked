import { useEffect, useState } from "react";

function useTime() {
  // Initial Time in seconds
  const INITIALTIME = 86400;
  const [timeRemaining, setTimeRemaining] = useState(INITIALTIME);
  const hours = Math.floor(timeRemaining / 3600);
  const mins = Math.floor((timeRemaining % 3600) / 60);
  const secs = timeRemaining % 60;

  // USEEFFECT HOOK TO REDUCE THE SECONDS REMAINING BY 1 EVERY SECOND
  useEffect(() => {
    if (timeRemaining === 0) return;
    const id = setInterval(() => setTimeRemaining((time) => time - 1), 1000);
    return () => {
      clearInterval(id);
    };
  }, [timeRemaining]);

  return { hours, mins, secs };
}

export default useTime;
