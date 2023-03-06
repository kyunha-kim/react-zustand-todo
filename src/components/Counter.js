import React from "react";
import { useCounterStore } from "../store/useCounterStore";
// import { }

const Counter = () => {
  const clear = () => {
    useCounterStore.persist.clearStorage();
  };

  const { count, decrement, increment, reset, setNumber } = useCounterStore();
  return (
    <div>
      <p>{count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button onClick={reset}>reset</button>
      <button onClick={() => setNumber(10)}>10</button>
      <button onClick={clear}>clear</button>
    </div>
  );
};

export default Counter;
