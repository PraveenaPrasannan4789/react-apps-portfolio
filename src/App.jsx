import Counter from "./components/Counter";
import ToDo from "./components/ToDo";

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
      <ToDo />
    </>
  );
}

export default App;
