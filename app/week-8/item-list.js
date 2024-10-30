"use client";

import { useState } from "react";
import Item from "./item";

// Define unique colors for each category
const categoryColors = {
  Dairy: "bg-blue-300 hover:bg-blue-200",
  Bakery: "bg-yellow-300 hover:bg-yellow-200",
  Produce: "bg-green-300 hover:bg-green-200",
  Meat: "bg-red-300 hover:bg-red-200",
  "Canned Goods": "bg-purple-300 hover:bg-purple-200",
  "Dry Goods": "bg-pink-300 hover:bg-pink-200",
  Household: "bg-teal-300 hover:bg-teal-200",
};

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name"); // Sorting by name initially

  // Sorting logic with immutability (using a copy of the items prop)
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
  });

  // Grouping logic with immutability
  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <main>
      <section className="pt-2">
        {/* Sort Buttons */}
        <div className="flex justify-center space-x-4 mb-4 text-black">
          <button
            onClick={() => setSortBy("name")}
            className={`p-2 rounded-lg ${
              sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
          >
            Sort by Name
          </button>
          <button
            onClick={() => setSortBy("category")}
            className={`p-2 rounded-lg ${
              sortBy === "category" ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
          >
            Sort by Category
          </button>
          <button
            onClick={() => setSortBy("category-group")}
            className={`p-2 rounded-lg ${
              sortBy === "category-group"
                ? "bg-blue-500 text-white"
                : "bg-gray-300"
            }`}
          >
            Group by Category
          </button>
        </div>

        {/* Conditional rendering based on sorting method */}
        {sortBy !== "category-group" &&
          sortedItems.map((item) => (
            <div
              key={item.id}
              className={`max-w-[256px] w-full p-2 pl-4 m-3 rounded-lg text-black ${
                categoryColors[item.category] ||
                "bg-orange-500 hover:bg-orange-300"
              }`}
              onClick={() => onItemSelect(item)} // Trigger onItemSelect with the clicked item
            >
              <Item
                name={item.name}
                quantity={item.quantity}
                category={item.category}
                onSelect={() => onItemSelect(item)} // Pass onSelect to Item
              />
            </div>
          ))}

        {/* Grouped by category view */}
        {sortBy === "category-group" &&
          Object.keys(groupedItems).map((category) => (
            <div key={category}>
              {/* Shortened width of the category header (grey bar) */}
              <h2 className="max-w-[384px] w-full capitalize text-xl font-bold text-black bg-gray-200 p-1 pl-2 rounded-lg mt-4">
                {category}
              </h2>
              {groupedItems[category].map((item) => (
                <div
                  key={item.id}
                  className={`max-w-[256px] w-full p-2 pl-4 m-3 rounded-lg text-black ${
                    categoryColors[item.category] ||
                    "bg-orange-500 hover:bg-orange-300"
                  }`}
                  onClick={() => onItemSelect(item)} // Trigger onItemSelect with the clicked item
                >
                  <Item
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                    onSelect={() => onItemSelect(item)} // Pass onSelect to Item
                  />
                </div>
              ))}
            </div>
          ))}
      </section>
    </main>
  );
}
