import { useState } from "react";

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <div>
      <p>{isOn ? "ON" : "}</p>

      <button onClick={() => setIsOn(!isOn)}>Toggle</button>
    </div>
  );
};

export default Toggle;
