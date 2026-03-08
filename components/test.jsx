"use client";

import { useReducer } from "react";

// Step 1: Define the reducer function
function Reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

// Step 2: Define initial state
const initialState = { count: 0 };

export default function Counter() {
  // Step 3: Initialize useReducer
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>
    </div>
  );
}