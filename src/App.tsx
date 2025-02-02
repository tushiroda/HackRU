import React from "react";
import "./App.css";
import {IngredientAPI} from "./IngredientAPI.ts";

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";

function App() {
  return (
    <div className="h-100">
      <div className="topbar d-flex justify-content-end align-items-center width-100">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown style={{ paddingLeft: "50px", paddingRight: "50px" }}>
        <DropdownButton id="dropdown-basic-button" title="">
          <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
        </DropdownButton>

        </Dropdown>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center h-75">
        <h1>Byte2Bite</h1>
        <div className="d-flex flex-row w-100 justify-content-center align-items-center">
          <Form className="inputQuery">
            <Form.Group className="group d-flex justify-content-center align-items-center" controlId="formBasicEmail">
              <Form.Control className="prompt" type="text" placeholder="Enter dish name..." />
              <Button variant="primary" type="submit" className="getDish">
                Get Dish
              </Button>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default App;

// function App() {
//   console.log(IngredientAPI("pizza"));
  
//   return (

//     // <div className="container">
//     //   <h1>Enter Your Desired Dish!</h1>
//     //   <input type="text" id="dishName" placeholder="Enter dish name" />
//     //   <button id="getIngredientsBtn">Get Ingredients</button>
//     //   <div id="ingredientsList" className="ingredients-list">
//     //   </div>
//     // </div>
//   );
// }

// export default App;
