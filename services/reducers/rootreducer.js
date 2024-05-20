import { combineReducers } from 'redux';
import taskReducer from './reducers'; // Import your task reducer

const rootReducer = combineReducers({
  // Add more reducers here if needed
  task: taskReducer
});

export default rootReducer;