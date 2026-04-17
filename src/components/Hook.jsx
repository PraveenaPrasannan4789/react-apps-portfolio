import { useState, useEffect } from "react";

function Hook() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(interval); // cleanup
  }, []); // empty dependency array → runs only once on mount

  return <p>Seconds: {seconds}</p>;
}

export default Hook;
