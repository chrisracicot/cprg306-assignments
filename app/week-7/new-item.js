// "use client";
// indicates tells Next.js to run this code on the client side

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [quantity, setCount] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

  const handleSubmit = (submit) => {
    submit.preventDefault();

    const newItem = {
      id: Math.random().toString(36).substring(2, 9), // Generate random string for ID
      name: name,
      category: category,
      quantity: quantity,
    };

    // Call the onAddItem prop and pass the new item
    onAddItem(newItem);

    // Reset the form after submission
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
    <div className="bg-orange-400 rounded-2xl p-4 m-6 border-double border-orange-300 border-4">
      {/* Shopping List Paragraph in its own flex box */}
      <div className="flex justify-center mb-4">
        <p className="text-black text-center font-bold text-2xl">
          Shopping List
        </p>
      </div>

      {/* Quantity and Buttons */}
      <div className="flex items-center justify-center space-x-4 mb-4">
        <button
          className={`w-10 h-7 flex items-center justify-center rounded-lg border-solid border-2 text-black ${
            quantity <= 1
              ? "bg-gray-400 border-gray-300"
              : "bg-green-500 border-green-300 hover:bg-green-400"
          }`}
          disabled={quantity <= 1}
          onClick={() => setCount(quantity - 1)}
        >
          -
        </button>

        <p className="text-black text-center font-bold text-xl">{quantity}</p>

        <button
          className={`w-10 h-7 flex items-center justify-center rounded-lg border-solid border-2 text-black ${
            quantity >= 20
              ? "bg-gray-400 border-gray-300"
              : "bg-green-500 border-green-300 hover:bg-green-400"
          }`}
          disabled={quantity >= 20}
          onClick={increment}
        >
          +
        </button>

        <button
          type="submit"
          onClick={handleSubmit}
          className="w-28 h-7 flex items-center justify-center text-black text-sm p-2 rounded bg-blue-500 border-blue-300 hover:bg-blue-400"
        >
          Add to cart
        </button>
      </div>

      <form className="mt-4">
        {/* Category Label and Select in its own flex box */}
        <div className="flex items-center justify-center mb-4">
          <label className="text-black mr-2">Category:</label>
          <select
            className="text-black bg-white rounded pl-1 h-7"
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
        </div>

        {/* Name Label and Input in its own flex box */}
        <div className="flex items-center justify-center mb-4">
          <label className="text-black mr-2">Name:</label>
          <input
            required
            className="text-black bg-white rounded pl-1 h-7"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}
