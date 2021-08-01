import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "./styles.css";

export default function AppNavbar({ totalItems }) {
  return (
    <Navbar
      collapseOnSelect
      sticky="top"
      className="d-flex justify-content-between nav-container"
    >
      <Nav className="d-none d-md-flex">
        <Nav.Link>About</Nav.Link>
        <Nav.Link as={NavLink} to="/">
          Catalog
        </Nav.Link>
      </Nav>
      <Navbar.Brand>JellyFish</Navbar.Brand>
      <Nav>
        <Nav.Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-person mr-2"
            viewBox="0 0 16 16"
            alt="Login"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
          </svg>
          Login
        </Nav.Link>
        <Nav.Link as={NavLink} to="/cart">
          <div className="circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-cart2"
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
            <span className="cart-products">{totalItems}</span>
          </div>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
