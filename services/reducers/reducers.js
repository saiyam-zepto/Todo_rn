// taskReducer.js
import { ADD_TASK, UPDATE_TASK, DELETE_TASK } from '../actiontypes';

const initialState = {
  tasks: []
};

const task = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    case UPDATE_TASK:
      const updatedTasks = [...state.tasks];
      updatedTasks[action.payload.index] = action.payload.task;
      return {
        ...state,
        tasks: updatedTasks
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((_, index) => index !== action.payload)
      };
    default:
      return state;
  }
};

export default task;
