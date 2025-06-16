import { useState } from "react";
import classes from  "./Counter.module.scss";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className={classes.btn}>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}