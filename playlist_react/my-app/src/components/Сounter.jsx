import { useState } from "react";

function Counter() {
  const [like, setLike] = useState(0);

  function increment() {
    setLike(like + 1);
  }
  function decrement() {
    setLike(like - 1);
  }

  return (
    <div className="App">
      <h1>Songs count:{like}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}
export default Counter;
