"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals;
}

async function fetchMealIngredients(mealId) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
  );
  const data = await response.json();
  return data.meals ? data.meals[0] : null;
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  async function loadMealIdeas() {
    try {
      if (ingredient) {
        const mealIdeas = await fetchMealIdeas(ingredient);
        setMeals(mealIdeas || []);
      } else {
        setMeals([]);
      }
    } catch (error) {
      console.error("Error fetching meal ideas:", error);
    }
  }

  async function handleMealClick(mealId) {
    if (selectedMeal && selectedMeal.idMeal === mealId) {
      setSelectedMeal(null);
    } else {
      try {
        const mealDetails = await fetchMealIngredients(mealId);
        if (mealDetails) {
          const ingredients = [];
          for (let i = 1; i <= 20; i++) {
            if (
              mealDetails[`strIngredient${i}`] &&
              mealDetails[`strIngredient${i}`].trim() !== ""
            ) {
              ingredients.push(
                `${mealDetails[`strIngredient${i}`]} (${
                  mealDetails[`strMeasure${i}`]
                })`
              );
            }
          }
          mealDetails.ingredients = ingredients;
          setSelectedMeal(mealDetails);
        }
      } catch (error) {
        console.error("Error fetching meal ingredients:", error);
      }
    }
  }

  useEffect(() => {
    loadMealIdeas();
    setSelectedMeal(null);
  }, [ingredient]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Meal Ideas</h2>
      {ingredient ? (
        <p>Here are some meal ideas using {ingredient}:</p>
      ) : (
        <p>Select an item to see meal ideas.</p>
      )}
      <ul className="mt-4">
        {meals.map((meal) => (
          <li
            key={meal.idMeal}
            className="mb-2 p-2 bg-slate-800 cursor-pointer"
            onClick={() => handleMealClick(meal.idMeal)}
          >
            <p className="font-bold">{meal.strMeal}</p>
            {selectedMeal && selectedMeal.idMeal === meal.idMeal && (
              <div className="p-2 mt-2 bg-slate-700">
                <p className="font-semibold">Ingredients needed:</p>
                <ul>
                  {selectedMeal.ingredients.map((ing, index) => (
                    <li key={index}>{ing}</li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}