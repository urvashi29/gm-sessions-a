import { ADD_TASK } from "./taskActions";

export const addTask = (task) => ({ type: ADD_TASK, payload: task });
