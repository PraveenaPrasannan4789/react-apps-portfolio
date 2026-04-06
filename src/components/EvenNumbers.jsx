const EvenNumbers = ({ arry }) => {
  const filteredArray = arry.filter((val) => val % 2 === 0);

  console.log("fil", filteredArray);

  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        {filteredArray.map((val) => (
          <li style={{ margin: "10px" }}>{val}</li>
        ))}
      </ul>
    </div>
  );
};

export default EvenNumbers;
