// src/reducers.js

import { combineReducers } from 'redux';

// Define your reducers here
const initialState = {
  counter: 0,
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}

// Combine reducers if you have multiple reducers
const rootReducer = combineReducers({
  counter: counterReducer,
  // Add other reducers here if needed
});

export default rootReducer;