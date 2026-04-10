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
    <div className="container">
      <h2>Todo App</h2>

      <div className="input-section">
        <input
          type="text"
          value={taskName}
          placeholder="Enter task here"
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul className="todo-list">
        {taskList.map((val, idx) => (
          <li key={idx} className="todo-item">
            <span>{val}</span>
            <button onClick={() => deleteTask(idx)}>Delete</button>
          </li>
        ))}
      </ul>

      <style>{`
        /* Mobile First */
        .container {
          max-width: 100%;
          padding: 15px;
          margin: auto;
          text-align: center;
          background: aliceblue;
        }

        .input-section {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        input {
          padding: 10px;
          font-size: 14px;
        }

        button {
          padding: 10px;
          cursor: pointer;
        }

        .todo-list {
          list-style: none;
          padding: 0;
          margin-top: 20px;
        }

        .todo-item {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
          margin: 10px 0;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 8px;
          background: #fff;
        }

        /* Tablet */
        @media (min-width: 768px) {
          .container {
            max-width: 600px;
          }

          .input-section {
            flex-direction: row;
          }

          .todo-item {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        }

        /* Desktop */
        @media (min-width: 1024px) {
          .container {
            max-width: 800px;
          }
        }
      `}</style>
    </div>
  );
};

export default ToDo;
