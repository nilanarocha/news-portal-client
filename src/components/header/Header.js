import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchForm from "../search-form/SearchForm";

class Header extends Component {
  render() {
    return (
      <header>
        <Link to="/">Home</Link>
        <Link to="/news/world">World</Link>
        <Link to="/news/entertainment">Entertainment</Link>
        <Link to="/author">Authors</Link>
        <Link to="/search">Search</Link>
        <SearchForm />
      </header>
    );
  }
}

export default Header;
