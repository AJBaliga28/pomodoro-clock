import React from "react";
import { useState } from "react";

const Tasks = () => {
  const [task, setTask] = useState("");

  return (
    <div>
      <br />

      <input
        type="text"
        placeholder="Enter your task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <h2>{task}</h2>
    </div>
  );
};

export default Tasks;
