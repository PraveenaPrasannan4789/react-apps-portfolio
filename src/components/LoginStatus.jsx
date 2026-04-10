import { useState } from "react";

const LoginStatus = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{isLoggedIn ? "Logged In" : "Logged out"} </h1>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default LoginStatus;
