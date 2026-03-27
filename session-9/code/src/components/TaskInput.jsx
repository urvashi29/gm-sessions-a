import React, { useState } from "react";
import {useDispatch} from "react-redux";
import { addTask } from "../actions/taskActionCreator";

const TaskInput = () => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("todo");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!title.trim()) return;

    const task = { title, status, id: Date.now() };
    dispatch(addTask(task));//dispatching action to reducer
    setTitle("");
    setStatus("todo");
  };

  return (
    <>
      <input
        placeholder="Enter Task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="todo">Todo</option>
        <option value="done">Done</option>
      </select>

      <button onClick={handleAdd}>Add Task</button>
    </>
  );
};

export default TaskInput;
