"use client";

import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
// import itemsData from "./items.json";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
  const { user } = useUserAuth();
  const router = useRouter();

  // Track whether we are checking authentication status
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState(null);

  const categoryDisplayNames = {
    produce: "Produce",
    dairy: "Dairy",
    meat: "Meat",
    dry: "Dry Goods",
    canned: "Canned Goods",
    bakery: "Bakery",
    household: "Household",
  };

  // Function to load items from Firestore
  const loadItems = async () => {
    try {
      if (user?.uid) {
        const shoppingList = await getItems(user.uid);
        setItems(shoppingList);
      }
    } catch (error) {
      console.error("Error loading items:", error);
    }
  };

  useEffect(() => {
    // Set a delay to allow Firebase authentication state to load fully
    const authCheckTimeout = setTimeout(() => {
      if (user === null) {
        // If user is confirmed as unauthenticated, redirect to the landing page
        router.push("/week-10");
      } else {
        // Authentication has been fully checked, stop the loading state
        setIsCheckingAuth(false);
        // Load items once the user is authenticated
        loadItems();
      }
    }, 1000); // Adjust the delay if necessary

    return () => clearTimeout(authCheckTimeout);
  }, [user, router]);

  // While checking auth status, render nothing to prevent premature redirects
  if (isCheckingAuth) return null;

  const handleAddItem = async (name, quantity, categoryKey) => {
    const newItem = {
      name: name,
      quantity: quantity,
      category: categoryDisplayNames[categoryKey] || categoryKey,
    };

    try {
      if (user?.uid) {
        // Add the new item to Firestore and get the returned document ID
        const newItemId = await addItem(user.uid, newItem);

        // Add the new item to the state with the generated ID
        // setItems((prevItems) => [...prevItems, { id: newItemId, ...newItem }]);
      }
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name
      .split(",")[0]
      .replace(/[\p{Emoji}\p{Extended_Pictographic}]/gu, "")
      .trim();

    const ingredientForms = cleanedName.endsWith("s")
      ? [cleanedName, cleanedName.slice(0, -1)]
      : [cleanedName];

    setSelectedItemName(ingredientForms);
  };

  const sortedItems = [...items].sort((a, b) => {
    if (a.category === b.category) {
      return a.name.localeCompare(b.name);
    }
    return a.category.localeCompare(b.category);
  });

  return (
    <div className="bg-blue-900 min-h-screen flex justify-center items-center">
      <main className="p-6 bg-white shadow-lg max-w-6xl w-full flex">
        <div className="w-1/2 p-4">
          <h1 className="text-5xl font-extrabold text-blue-700 text-center mb-8 shadow-md p-4">
            Shopping List
          </h1>
          <section className="mb-8">
            <NewItem onAddItem={handleAddItem} />
          </section>
          <header className="bg-white p-4 shadow-md">
            <ItemList items={sortedItems} onItemSelect={handleItemSelect} />
          </header>
        </div>

        <div className="w-1/2 p-4">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </main>
    </div>
  );
}
