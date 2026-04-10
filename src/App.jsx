import Counter from "./components/Counter";
import ToDo from "./components/ToDo";
import EvenNumbers from "./components/EvenNumbers";
import ReverseString from "./components/ReverseString";
import UserList from "./components/UserList";
import SerachFilter from "./components/SearchFilter";
import Toggle from "./components/Toggle";
import LoginStatus from "./components/LoginStatus";

function App() {
  const headerStyle = {
    backgroundColor: "#353464",
    color: "white",
    padding: "20px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    borderRadius: "5px",
  };
  return (
    <>
      <h1 style={headerStyle}>Dashboard</h1>
      {/* <Counter /> */}
      {/* <ToDo /> */}
      {/* <EvenNumbers arry={[5, 7, 9, 8]}></EvenNumbers> */}
      {/* <ReverseString /> */}
      {/* <UserList /> */}
      {/* <SerachFilter /> */}
      {/* <Toggle /> */}
      <LoginStatus />
    </>
  );
}

export default App;
