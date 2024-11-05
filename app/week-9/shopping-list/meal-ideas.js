"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  // Function to fetch meal ideas from TheMealDB API
  const fetchMealIdeas = async (ingredient) => {
    try {
      // Loop through ingredient forms and fetch recipes for each
      const fetchRequests = ingredient.map(async (ing) => {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ing}`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch meals for ${ing}`);
        }
        const data = await response.json();
        return data.meals || [];
      });

      const results = await Promise.all(fetchRequests);
      // Flatten and remove duplicates from results
      const uniqueMeals = Array.from(
        new Map(results.flat().map((meal) => [meal.idMeal, meal])).values()
      );
      setMeals(uniqueMeals);
    } catch (error) {
      console.error("Error fetching meal ideas:", error);
      setMeals([]);
    }
  };

  useEffect(() => {
    if (ingredient && ingredient.length > 0) {
      fetchMealIdeas(ingredient);
    }
  }, [ingredient]);

  return (
    <div className="meal-ideas  text-black p-4 rounded-lg shadow-md">
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
        <p className="text-center text-black">
          No meal ideas found for "
          {ingredient && ingredient.length > 0
            ? ingredient.join(", ")
            : "the given ingredient(s)"}
          ".
        </p>
      )}
    </div>
  );
}
