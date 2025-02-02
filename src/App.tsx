import React from "react";
import "./App.css";
import {IngredientAPI} from "./IngredientAPI.ts";

function App() {
  console.log(IngredientAPI("pizza"));
  
  return (
    <div className="container">
      <h1>Enter Your Desired Dish!</h1>
      <input type="text" id="dishName" placeholder="Enter dish name" />
      <button id="getIngredientsBtn">Get Ingredients</button>
      <div id="ingredientsList" className="ingredients-list">
      </div>
    </div>
  );
}

export default App;
