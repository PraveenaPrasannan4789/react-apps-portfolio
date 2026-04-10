import { useState, useEffect } from "react";

const UserList = () => {
  const [userList, setUserList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplacekholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUserList(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("errr", err);
        setError(err);
        setLoading(false);
      });
  }, []);

  if (error) {
    return <p>error:{error}</p>;
  }

  return (
    <div>
      {error && <p>Error:{error}</p>}
      {loading && <p>Loading...</p>}
      <ul>
        {userList.map((val) => {
          return <li key={val.id}>{val.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default UserList;
