import React, { Component } from "react";
import "./Advertisement.css";
import { Container, Carousel } from "react-bootstrap";

class Advertisement extends Component {
  render() {
    return (
      <Container className="containerAdvertisement">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://2.imimg.com/data2/IS/TN/MY-2561564/advertisement-designing-services-500x500.jpg"
              alt="First slide"
              width="270px"
              height="600px"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://mdorfster.files.wordpress.com/2011/02/cocacolaads15.jpg"
              alt="Third slide"
              width="270px"
              height="600px"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://nikeblog.com/wp-content/uploads/2010/08/Nike-Trainer-One-The-Ultimate-Quick-Fix.jpg"
              alt="Third slide"
              width="270px"
              height="600px"
            />
          </Carousel.Item>
        </Carousel>

        {/* <img
          width={270}
          height={600}
          src={
            "https://2.imimg.com/data2/IS/TN/MY-2561564/advertisement-designing-services-500x500.jpg"
          }
        /> */}
      </Container>
    );
  }
}

export default Advertisement;
