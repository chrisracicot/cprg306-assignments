"use client";
//indicates tells Next.js to run this code on the client side

import { useState } from "react";

export default function NewItem() {
  const [quantity, setCount] = useState(1);

  const increment = () => quantity < 20 && setCount(quantity + 1);

  const decrement = () => quantity > 1 && setCount(quantity - 1);

  return (
    <div>
      <p>Amount: {quantity}</p>

      <button disabled={increment > 20} onClick={increment}>
        Increment
      </button>
      <button disabled={decrement <= 1} onClick={decrement}>
        Decrement
      </button>
    </div>
  );
}
