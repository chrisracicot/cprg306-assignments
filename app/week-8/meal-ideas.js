"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  // State variable to hold the list of meal ideas
  const [meals, setMeals] = useState([]);

  // Function to fetch meal ideas from TheMealDB API
  const fetchMealIdeas = async (ingredient) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch meal ideas");
      }
      const data = await response.json();
      return data.meals || []; // Return meals if available, or an empty array
    } catch (error) {
      console.error("Error fetching meal ideas:", error);
      return []; // Return an empty array on error
    }
  };

  // Define loadMealIdeas function to fetch meals and update the state
  const loadMealIdeas = async () => {
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas);
  };

  // useEffect to load meal ideas when the ingredient changes
  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  // Render method
  return (
    <div className="meal-ideas bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Meal Ideas</h2>

      {meals.length > 0 ? (
        <ul className="space-y-2">
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="p-2 bg-white rounded shadow flex items-center space-x-4"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-16 h-16 rounded-full"
              />
              <span>{meal.strMeal}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">
          No meal ideas found for "{ingredient}".
        </p>
      )}
    </div>
  );
}
