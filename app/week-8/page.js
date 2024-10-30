"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const categoryDisplayNames = {
    produce: "Produce",
    dairy: "Dairy",
    meat: "Meat",
    dry: "Dry Goods",
    canned: "Canned Goods",
    bakery: "Bakery",
    household: "Household",
  };

  const handleAddItem = (name, quantity, categoryKey) => {
    const newItem = {
      id: items.length + 1,
      name: name,
      quantity: quantity,
      category: categoryDisplayNames[categoryKey] || categoryKey,
    };

    setItems([...items, newItem]);
  };

  // Sort items by category and then by name alphabetically within each category
  const sortedItems = [...items].sort((a, b) => {
    if (a.category === b.category) {
      return a.name.localeCompare(b.name);
    }
    return a.category.localeCompare(b.category);
  });

  return (
    <div className="bg-blue-900 min-h-screen flex justify-center items-center">
      <main className="p-6 bg-white shadow-lg max-w-4xl w-full">
        <h1 className="text-5xl font-extrabold text-blue-700 text-center mb-8 shadow-md p-4">
          Shopping List
        </h1>

        <section className="mb-8">
          <NewItem onAddItem={handleAddItem} />
        </section>

        <header className="bg-white p-4 shadow-md">
          {/* Pass the sorted items to ItemList */}
          <ItemList items={sortedItems} />
        </header>
      </main>
    </div>
  );
}
