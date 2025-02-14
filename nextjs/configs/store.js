import { createStore } from "@reduxjs/toolkit";
import rootReducers from "../reducers"
import { composeWithDevTools } from '@redux-devtools/extension';

const composeEnhancers = composeWithDevTools({
  name:"JOB",
});

const store = createStore(rootReducers,composeEnhancers())

export default store
