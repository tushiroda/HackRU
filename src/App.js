import "./App.css";
import {getIngredients} from "./IngredientAPI.ts";

function App() {
  console.log(getIngredients("pizza"));

  return (
    <div className="container">
      <h1>Enter Your Desired Dish!</h1>
      <input type="text" id="dishName" placeholder="Enter dish name" />
      <button id="getIngredientsBtn">Get Ingredients</button>
      <div id="ingredientsList" class="ingredients-list">
      </div>
    </div>
  );
}

export default App;
