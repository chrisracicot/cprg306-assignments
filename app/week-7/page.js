//

"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page() {
  // Initialize a state variable "items" with the data from items.json
  const [items, setItems] = useState(itemsData);

  // Event handler to add a new item to the list
  const handleAddItem = () => {
    const newItem = {
      id: items.length + 1, // Unique ID based on the length of the items array
      name: "New Item", // Default name for the new item
      quantity: 1, // Default quantity for the new item
      category: "Misc", // Default category for the new item
    };

    // Update the state by adding the new item to the existing items array
    setItems([...items, newItem]);
  };

  return (
    <div className="bg-blue-900 min-h-screen flex justify-center items-center">
      <main className="p-6 bg-white shadow-lg max-w-4xl w-full">
        {/* Header Section */}
        <h1 className="text-5xl font-extrabold text-blue-700 text-center mb-8 shadow-md p-4">
          Shopping List
        </h1>

        {/* Add New Item Section */}
        <section className="mb-8">
          {/* Pass the handleAddItem function as the onAddItem prop */}
          <NewItem onAddItem={handleAddItem} />
        </section>

        {/* Display Item List Section */}
        <header className="bg-white p-4 shadow-md">
          {/* Pass the items state as a prop to ItemList */}
          <ItemList items={items} />
        </header>
      </main>
    </div>
  );
}
