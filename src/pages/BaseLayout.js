import React, { Component, Fragment } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Container } from "react-bootstrap";
import "./BaseLayout.css";

class BaseLayout extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <main>
          <Container>{this.props.children}</Container>
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default BaseLayout;
