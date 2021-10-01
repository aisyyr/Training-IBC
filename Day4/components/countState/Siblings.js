import React, { useState } from 'react';

export default function Siblings({props}) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Kranjang Belanja jumlahnya adalah {props} </h1>
    </div>
  );
}