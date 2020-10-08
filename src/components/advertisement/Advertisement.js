import React, { Component } from 'react';
import './Advertisement.css';
import { Container, Carousel } from 'react-bootstrap';

class Advertisement extends Component {
  render() {
    return (
      <Container className="containerAdvertisement">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://vignette.wikia.nocookie.net/advertising101/images/9/96/Bcc8fabfa65529ceefefcaef69ab1abf.jpg/revision/latest?cb=20171126114117"
              alt="First slide"
              width="270px"
              height="600px"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://mdorfster.files.wordpress.com/2011/02/cocacolaads15.jpg"
              alt="second slide"
              width="270px"
              height="600px"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://d3nuqriibqh3vw.cloudfront.net/images/virgin-active-praise-strength.jpg"
              alt="Third slide"
              width="270px"
              height="600px"
            />
          </Carousel.Item>
        </Carousel>
      </Container>
    );
  }
}

export default Advertisement;
