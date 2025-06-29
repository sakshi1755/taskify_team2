import React, { useState } from "react";
import Taskform from "../Components/Taskform";

const getInitialTasks = () => {
  const saved = localStorage.getItem("tasks");
  return saved ? JSON.parse(saved) : [];
};

const TaskPage = () => {
  const [tasks, setTasks] = useState(getInitialTasks);

  const addTask = (taskData) => {
    const updatedTasks = [...tasks, taskData];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const deleteTask = (indexToDelete) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>My Tasks</h1>
      <Taskform addTask={addTask} />
      <ul style={{ marginTop: "20px", listStyle: "none", padding: 0 }}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              marginBottom: "10px",
              position: "relative",
              background: "#fff",
            }}
          >
            <strong>{task.title}</strong>
            <p>{task.description}</p>
            <small>
              Priority: {task.priority} | Status: {task.status}
            </small>
            <button
              onClick={() => deleteTask(index)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "#ef4444",
                color: "white",
                border: "none",
                padding: "5px 10px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskPage;
