// src/components/Counter.js

import React from 'react';
import { connect } from 'react-redux';

const Counter = ({ counter, increment, decrement }) => {
  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

// Define mapStateToProps to access state from the Redux store
const mapStateToProps = (state) => ({
  counter: state.counter, // accessing counter state from rootReducer
});

// Define mapDispatchToProps to dispatch actions to the Redux store
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: 'INCREMENT' }),
  decrement: () => dispatch({ type: 'DECREMENT' }),
});

// Connect the Counter component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
