import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
  incrementAsync,
} from "../state/counter/slice";

const Counter = () => {
  const { value, isLoading } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  if (isLoading) {
    return <h1>...Loading</h1>;
  }

  return (
    <div>
      <h1>Count - {value}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(incrementByValue(5))}>
        Increment By 5
      </button>
      <button onClick={() => dispatch(incrementAsync(5))}>
        Increment async By 5
      </button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
