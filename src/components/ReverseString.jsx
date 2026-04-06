import { useState } from "react";

const ReverseString = () => {
  const [stringToReverse, setStringToReverse] = useState("");
  const [reversed, setReversed] = useState("");
  const [showReversed, setShowReversed] = useState(false);

  const reverseStr = () => {
    const reversed = stringToReverse.split("").reverse().join("");

    //or
    //let reversed=''
    //for(let i=str.length;i>=0;i--){ reversed+=str[i]}
    setReversed(reversed);
    setShowReversed(true);
  };

  return (
    <div>
      <div style={{ margin: "10px", padding: "20px" }}>
        <input
          type="text"
          style={{ margin: "10px" }}
          value={stringToReverse}
          placeholder="Enter string"
          onChange={(e) => setStringToReverse(e.target.value)}
        />
        <button onClick={() => reverseStr()}>Reverse</button>
      </div>
      {showReversed && (
        <div>
          <h1>Reversed string is {reversed}</h1>
        </div>
      )}
    </div>
  );
};

export default ReverseString;
