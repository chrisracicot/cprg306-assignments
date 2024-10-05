"use client";
// indicates tells Next.js to run this code on the client side

import { useState } from "react";

export default function NewItem() {
  const [quantity, setCount] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

  const handleSubmit = (submit) => {
    submit.preventDefault();

    const item = {
      name: name,
      category: category,
      quantity: quantity,
    };

    // Print to the web console

    console.log(item); // Directly log the item object

    // Popup alert
    alert(
      `Item submitted: ${item.name}, Category: ${item.category}, Quantity: ${item.quantity}`
    );

    // Reset the form

    setName("");
    setCategory("produce");
    setCount(1);
  };

  const increment = () => {
    if (quantity < 20) {
      setCount(quantity + 1);
    }
  };

  return (
    <div className="bg-orange-400 rounded-2xl p-4 border-double border-orange-300 border-4">
      <p className="text-black text-center pb-3 font-bold text-2xl">
        Amount: {quantity}
      </p>
      <button
        className={`w-40 p-2 pl-4 m-3 rounded-2xl text-black ${
          quantity >= 20
            ? "bg-gray-400 border-solid border-2 border-gray-300"
            : "bg-green-500 border-solid border-2 border-green-300 hover:bg-green-400"
        }`}
        disabled={quantity >= 20}
        onClick={increment}
      >
        Increment
      </button>
      <button
        className={`w-40 p-2 pl-4 m-3 rounded-2xl text-black ${
          quantity <= 1
            ? "bg-gray-400 border-solid border-2 border-gray-300"
            : "bg-green-500 border-solid border-2 border-green-300 hover:bg-green-400"
        }`}
        disabled={quantity <= 1}
        onClick={() => setCount(quantity - 1)}
      >
        Decrement
      </button>
      <form onSubmit={handleSubmit}>
        <label className="text-black">
          Name:
          <input
            required
            className="text-black bg-white"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label className="text-black">
          Category:
          <select
            className="text-black bg-white"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="meat">Meat</option>
            <option value="dry">Dry Goods</option>
            <option value="canned">Canned Goods</option>
            <option value="bakery">Bakery</option>
            <option value="household">Household</option>
          </select>
        </label>
        <br />
        <button
          type="submit"
          className="bg-blue-500 text-black p-2 mt-3 rounded"
        >
          Add to cart
        </button>
      </form>
    </div>
  );
}
