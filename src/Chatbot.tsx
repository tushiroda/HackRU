import React, { useState } from "react";
import "./Chatbot.css";
import { IngredientAPI } from "./IngredientAPI.ts";

function Chatbot() {
  const [dishName, setDishName] = useState("");
  const [ingredientsList, setIngredientsList] = useState("");

  const handleClick = async () => {
    if (!dishName) {
      alert("Please enter a dish name!");
      return;
    }

    try {
      var ingredients = String(await IngredientAPI(dishName))
        .trim()
        .split("--");
      ingredients[0] = "INGREDIENTS:";
      setIngredientsList(
        ingredients.map((ingredient, index) => (
          <div key={index}>
            {ingredient}
            <br />
          </div>
        ))
      );
    } catch (error) {
      console.error("Error fetching ingredients:", error);
    }
  };

  return (
    <div className="container">
      <h1>Declare Your Desired Dish!</h1>
      <input
        type="text"
        id="dishName"
        value={dishName}
        onChange={(e) => setDishName(e.target.value)}
        placeholder="Enter dish name..."
      />
      <button id="getIngredientsBtn" onClick={handleClick}>
        Get Ingredients
      </button>
      <div id="ingredientsList" className="ingredients-list">
        {ingredientsList}
      </div>
    </div>
  );
}

export default Chatbot;
