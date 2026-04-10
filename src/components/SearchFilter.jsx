import { useState } from "react";

const SearchFilter = () => {
  const [role, setRole] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [error, setError] = useState("");
  const users = [
    {
      name: "admin1",
      userType: "admin",
    },
    {
      name: "customer1",
      userType: "customer",
    },
    {
      name: "customer2",
      userType: "customer",
    },
    {
      name: "admin2",
      userType: "admin",
    },
  ];

  const handleClick = () => {
    if (!role.trim()) {
      setError("Please enter a role");
      setFilteredList([]);
      return;
    }
    const userList = users.filter((val, idx) => {
      return val.userType.toLowerCase() === role;
    });
    if (userList.length == 0) {
      setError("Role doesnot exist");
      setFilteredList([]);
      return;
    }
    setFilteredList(userList);
    setError("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter here"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      ></input>
      <button onClick={() => handleClick()}>Enter</button>

      <ul>
        {filteredList.map((val, idx) => (
          <li key={idx}>
            <span>{val.name}</span>
          </li>
        ))}
      </ul>
      {error && <p>{error}</p>}
    </div>
  );
};

export default SearchFilter;
