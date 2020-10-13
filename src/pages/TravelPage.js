import React, { Component } from 'react';

import BaseLayout from './BaseLayout';

import axios from 'axios';
import { Row, Col, Button } from 'react-bootstrap';
import Advertisement from '../components/advertisement/Advertisement';
import WebSpeech from '../helpers/speech';

import Weather from '../components/weather/Weather';
import './TravelPage.css';

class TravelPage extends Component {
  state = {
    text: null,
  };

  Speech = new WebSpeech();

  async componentDidMount() {
    try {
      const textResponse = await axios.get(
        `https://baconipsum.com/api/?type=meat-and-filler`
      );

      console.log(textResponse.data.join(' '));
      this.setState({
        text: textResponse.data.join(' '),
      });
    } catch (error) {
      console.log(error);
    }
  }

  onClickHandler = () => {
    const config = {
      rate: 1,
      pitch: 1,
      volume: 1,
    };

    this.Speech.sayText(
      document.querySelector('.containerText').innerText,
      config
    );

    console.log('event dispatched!');
  };

  onStopReadingText = () => {
    this.Speech.stop();
  };

  render() {
    const { text } = this.state;

    if (text === null) {
      return null;
    }

    const browserSupportsWebSpeech = window.speechSynthesis;
    return (
      <BaseLayout>
        <Row>
          <Col xs={12} md={8}>
            <div>
              <div className="containerText">
                <h1>Travel</h1>
                <div className="travelImage">
                  <img
                    src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                    alt="travel"
                    width="100%"
                  />
                </div>
                <div className="textDescription">{text}</div>
              </div>
            </div>
            {browserSupportsWebSpeech && (
              <>
                <Button
                  className="article"
                  variant="outline-danger"
                  onClick={this.onClickHandler}
                >
                  Read Content
                </Button>

                <Button
                  className="article"
                  variant="outline-danger"
                  onClick={this.onStopReadingText}
                >
                  Stop Reading
                </Button>
              </>
            )}
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
