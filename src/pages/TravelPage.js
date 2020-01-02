import React, { Component } from 'react';

import BaseLayout from './BaseLayout';

import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import Advertisement from '../components/advertisement/Advertisement';

import Weather from '../components/weather/Weather';
import './TravelPage.css';

class TravelPage extends Component {
  state = {
    text: null
  };

  async componentDidMount() {
    try {
      const textResponse = await axios.get(
        `https://baconipsum.com/api/?type=meat-and-filler`
      );

      console.log(textResponse.data.join(' '));
      this.setState({
        text: textResponse.data.join(' ')
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { text } = this.state;

    if (text === null) {
      return null;
    }
    return (
      <BaseLayout>
        <Row>
          <Col xs={12} md={8}>
            <div>
              <div className="containerText">
                <h1>Travel</h1>
                <div className="textDescription">{text}</div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <Weather />
            <Advertisement />
          </Col>
        </Row>
      </BaseLayout>
    );
  }
}

export default TravelPage;
