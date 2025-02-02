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
import { NavbarBrand } from "react-bootstrap";

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
    <div className="h-100">
      <Navbar className="topbar d-flex justify-content-center align-items-center">
        <Container className="w-100 mx-auto">
          <Nav className="d-flex justify-content-between align-items-center flex-row mx-auto w-100">
            <div className="d-flex align-items-center">
              <NavbarBrand href="/"><h2>BYTE2BITE</h2></NavbarBrand>
            </div>
            <div className="d-flex flex-row">
              <NavDropdown title={<img src={cart} width="48" alt="Cart" />} drop="down-centered">
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
        <h1>BYTE2BITE</h1>
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
      <div id="ingredientsList" className="ingredients-list">
        {ingredientsList}
      </div>
    </div>
  )
}

export default Chatbot;
