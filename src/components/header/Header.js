import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchForm from "../search-form/SearchForm";
import { Navbar, Nav } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <header>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/news/world">
                World
              </Link>
              <Link className="nav-link" to="/news/entertainment">
                Entertainment
              </Link>
              <Link className="nav-link" to="/author">
                Authors
              </Link>
            </Nav>
            <SearchForm />
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}

export default Header;
