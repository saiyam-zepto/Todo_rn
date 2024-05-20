// taskActions.js
import { ADD_TASK, UPDATE_TASK, DELETE_TASK } from '../actiontypes';

export const addtask = task => ({
  type: ADD_TASK,
  payload: task
});

export const updatetask = (index, task) => ({
  type: UPDATE_TASK,
  payload: { index, task }
});

export const deletetask = index => ({
  type: DELETE_TASK,
  payload: index
});
