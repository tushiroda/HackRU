import React, { useState } from "react";
import "./Chatbot.css";
import { IngredientAPI } from "./IngredientAPI.ts";
import menu from "./pngs/icons8-menu-50.png";
import profile from "./pngs/icons8-male-user-32.png";
import settings from "./pngs/icons8-settings-50.png";
import cart from "./pngs/icons8-cart-24.png";

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavbarBrand, NavItem } from "react-bootstrap";

var shopping = new Set();

function Chatbot() {
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
  const [ingredientsList, setIngredientsList] = useState<React.JSX.Element[]>([]);
  const [shoppingList, setShoppingList] = useState<React.JSX.Element[]>([]);
  const [brand, setBrand] = useState("BYTE2BITE");
  const [chatting, setChatting] = useState(false);

  const handleClick = async () => {
    if (!dishName) {
      alert("Please enter a dish name!");
      return;
    }

    try {
      setChatting(true);
      const sections = String(await IngredientAPI(dishName))
        .trim()
        .split("===");
      var ingredients = sections[0].trim().split("--");
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
    <div className="h-100">
      <Navbar className="topbar d-flex justify-content-center align-items-center">
        <Container className="w-100 mx-auto">
          <Nav className="d-flex justify-content-between align-items-center flex-row mx-auto w-100">
            <div className="d-flex align-items-center">
              <NavbarBrand href="/"><h2>BYTE2BITE</h2></NavbarBrand>
              <Navbar.Text>
                <a href="/">Past Bites</a>
              </Navbar.Text>            
            </div>
            <div className="d-flex flex-row">
              <NavDropdown title={<img src={cart} width="48" alt="Cart" />} drop="down-centered">
                {shoppingList.map((listItem, index) => {
                  return (
                    <NavDropdown.Item key={index}>
                      {listItem}
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
              <NavDropdown title={<img src={menu} alt="Menu" />} drop="down-centered"
                id="collapsible-nav-dropdown" >
                <NavDropdown.Item href="/">
                  <img
                    src={profile}
                    width="30"
                    className="d-inline-block align-top pr-4"
                    alt="Profile" />
                    Profile
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/">
                  <img
                    src={settings}
                    width="30"
                    className="d-inline-block align-top"
                    alt="Settings" />
                    Settings
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </Nav>
        </Container>
      </Navbar>
      <div className="d-flex flex-column justify-content-center align-items-center h-75">
      {brand && !chatting ? <h1>{brand}</h1> : null}
      {ingredientsList && chatting ? <div id="ingredientsList" className="ingredients-list">{ingredientsList}</div> : null}
        <div className="d-flex flex-row w-100 justify-content-center align-items-center">
          <input
            type="text"
            id="dishName"
            value={dishName}
            onChange={(e) => setDishName(e.target.value)}
            placeholder="Enter dish name..."
          />
          <button className="getIngredientsBtn" onClick={handleClick}>
            Get Ingredients
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
