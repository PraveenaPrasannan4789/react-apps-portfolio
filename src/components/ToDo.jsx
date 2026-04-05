import { useState } from "react";

const ToDo = () => {
  const [taskList, setTaskList] = useState([]);
  const [taskName, setTaskName] = useState("");

  const styles = {
    todoItem: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "200px",
      margin: "10px auto", // center horizontally
      padding: "10px 15px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      backgroundColor: "#f9f9f9",
    },
  };

  const addTask = () => {
    console.log("here");
    let newTaskList = [];
    newTaskList = [...taskList, taskName];
    console.log(newTaskList);
    setTaskList(newTaskList);
  };

  const deleteTask = (idx) => {
    let newTaskList = [];
    newTaskList = taskList.filter((_, index) => idx != index);
    setTaskList(newTaskList);
  };

  return (
    <div style={{ textAlign: "center", backgroundColor: "aliceblue" }}>
      <input
        type="text"
        value={taskName}
        style={{ margin: "10px" }}
        placeholder="Enter task here"
        onChange={(e) => setTaskName(e.target.value)}
      ></input>
      <button style={{ color: "black" }} onClick={() => addTask()}>
        Add task
      </button>
      <div>
        <ul style={{ listStyle: "none" }}>
          {taskList.map((val, idx) => (
            <li key={idx} style={styles.todoItem}>
              <span>{val}</span>
              <button onClick={() => deleteTask(idx)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDo;
