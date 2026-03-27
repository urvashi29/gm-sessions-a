import React, { useMemo } from "react";
import { useSelector } from "react-redux";

const TaskList = ({ status }) => {
  const allTasks = useSelector((state) => state.tasks.taskList);
  console.log(allTasks);

  const tasks = useMemo(() => {
    return allTasks.filter((task) => task.status === status);
  }, [allTasks, status]);

  return (
    <div>
      <h3>{status}</h3>
      {tasks.map((task) => {
        return <p>{task.title}</p>;
      })}
    </div>
  );
};

export default TaskList;
