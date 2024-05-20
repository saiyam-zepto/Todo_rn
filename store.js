
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './services/reducers/rootreducer';

const store = configureStore({
  reducer: rootReducer
});

export default store;
