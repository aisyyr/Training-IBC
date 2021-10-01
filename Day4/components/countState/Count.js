import React, { useState } from 'react';
import Siblings from './Siblings';

export default function Count() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
     <p className="jarakButton">You clicked {count} times</p>
      <button className="jarakButton" onClick={() => setCount(count - 1)}>
        -
      </button>
      <button className="jarakButton" onClick={() => setCount(count + 1)}>
        +
      </button>
      <Siblings props={count}></Siblings>
    </div>
  );
}