import React, { useState } from "react";
import "./App.css";
import { IngredientAPI } from "./IngredientAPI.ts";

var shopping = new Set(["SHOPPING LIST:"]);

function App() {

  function updateShoppingList(inputArray: string[]): void {
    for (let i = 0; i < inputArray.length; i++) {
      const temp = inputArray[i].trim();
      if (temp === "") {
        continue;
      } else {
        shopping.add(temp);
      }
    }
  }
  
  const [dishName, setDishName] = useState("");
  const [ingredientsList, setIngredientsList] = useState("");
  const [shoppingList, setShoppingList] = useState("");

  const handleClick = async () => {
    if (!dishName) {
      alert("Please enter a dish name!");
      return;
    }

    try {
      const sections = String(await IngredientAPI(dishName)).trim().split("===");
      var ingredients = sections[0]
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
      
      updateShoppingList(String(sections[1]).trim().split("--"));
      setShoppingList(
        Array.from(shopping).map((listItem, index) => (
          <div key={index}>
            {listItem}
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
      <br/>
      <div id="shoppingList" className="shopping-list">
        {shoppingList}
      </div>
    </div>
  );
}

export default App;
