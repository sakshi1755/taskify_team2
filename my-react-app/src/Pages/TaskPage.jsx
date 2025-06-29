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
      <ul style={{ marginTop: "20px", listStyle: "none", padding: 0, backgroundSize: "cover" }}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px 15px 40px 15px",
              marginBottom: "15px",
              position: "relative",
              background: "#fff",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              width: "100%",
              maxWidth: "500px",
              marginLeft: "auto",
              marginRight: "auto",
              wordBreak: "break-word",
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
                  bottom: "10px",
                  right: "10px",
                  background: "#ef4444",
                  color: "white",
                  border: "none",
                  padding: "6px 12px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "14px"
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
