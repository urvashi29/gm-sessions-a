import { ADD_TASK } from "../actions/taskActions";

const initState = {
  taskList: [],
  products: [],
  theme: "light",
};

const taskReducer = (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TASK:
      return { ...state, taskList: [...state.taskList, action.payload] };
    default:
      return state;
  }
};

export default taskReducer;
