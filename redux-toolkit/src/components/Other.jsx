import React from "react";
import { useSelector } from "react-redux";

const Other = () => {
  const count = useSelector((state) => state.counter.value);
  return (
    <div>
      <h1>Other {count}</h1>
    </div>
  );
};

export default Other;
