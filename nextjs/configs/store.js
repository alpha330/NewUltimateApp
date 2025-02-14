import { createStore,applyMiddleware } from "@reduxjs/toolkit";
import rootReducers from "../reducers"
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk'

const composeEnhancers = composeWithDevTools({
  name:"JOB",
});

const store = createStore(rootReducers,composeEnhancers(applyMiddleware(thunk)))

export default store
