import React from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <>
      <TaskInput />

      <div style={{ display: "flex", gap: "20px" }}>
        <TaskList status="todo" />
        <TaskList status="done" />
      </div>
    </>
  );
};

export default App;