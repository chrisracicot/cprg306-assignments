"use client";
// indicates tells Next.js to run this code on the client side

import { useState } from "react";

export default function NewItem() {
  const [quantity, setCount] = useState(1);
  //const [isClicked, setIsClicked] = useState(false); // New state to track button click

  const increment = () => {
    if (quantity < 20) {
      setCount(quantity + 1);
      //setIsClicked(true); // Set the clicked state to true
    }
  };

  return (
    <div className="bg-orange-400 rounded-2xl p-4 border-double border-orange-300 border-4">
      <p className="text-black text-center pb-3 font-bold text-2xl">
        Amount: {quantity}
      </p>{" "}
      {/* Centered text */}
      <button
        className={`w-40 p-2 pl-4 m-3 rounded-2xl text-black ${
          quantity >= 20
            ? "bg-gray-400 border-solid border-2 border-gray-500"
            : "bg-green-400 border-solid border-2 border-green-500" // Default
        }`}
        disabled={quantity >= 20}
        onClick={increment}
      >
        Increment
      </button>
      <button
        className={`w-40 p-2 pl-4 m-3 rounded-2xl text-black ${
          quantity <= 1
            ? "bg-gray-400 border-solid border-2 border-gray-500"
            : "bg-green-400 border-solid border-2 border-green-500"
        }`}
        disabled={quantity <= 1}
        onClick={() => setCount(quantity - 1)}
      >
        Decrement
      </button>
    </div>
  );
}
