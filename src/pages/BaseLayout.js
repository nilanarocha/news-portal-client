import React, { Component, Fragment } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import './BaseLayout.css';

class BaseLayout extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <main>
          {this.props.children}
        </main>
        <Footer />
      </Fragment>
    )
  }
}


export default BaseLayout;