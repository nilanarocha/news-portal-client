import React, { Component } from "react";
import axios from "axios";
import BaseLayout from "./BaseLayout";
import "./BaseLayout.css";
import { Row, Col } from "react-bootstrap";
import Advertisement from "../components/advertisement/Advertisement";

class WeatherPage extends Component {
  state = {
    weather: []
  };
  fetchWeatherByCity = async () => {
    const { city } = this.state;

    if (city === "") {
      alert("Your should inform the city");
      return;
    }
    const key = "f7606477b7dd4fef8cc04b1f77824111";
    const response = await axios.get(
      `https://api.weatherbit.io/v2.0/current?city=${city}&key=${key}`
    );
    this.setState({
      weather: response.data.data
    });
  };

  _handleInput = event => {
    this.setState({ city: event.target.value });
  };

  render() {
    const { weather } = this.state;
    if (weather.length) {
      console.log("here is what a weather object has", weather);
    }
    return (
      <BaseLayout>
        <Row>
          <Col xs={12} md={8}>
            <div>
              <p className="city">Weather</p>
              <input
                className="search"
                type="search"
                placeholder="search by city"
                onInput={this._handleInput}
              />
              <button
                className="submit"
                type="button"
                onClick={this.fetchWeatherByCity}
              >
                Search
              </button>
              <hr />
              {weather.map(weather => (
                <a href={weather.city_name}>
                  {weather.city_name} has {weather.weather.description}
                </a>
              ))}
            </div>
          </Col>
          <Col xs={12} md={4}>
            <Advertisement />
          </Col>
        </Row>
      </BaseLayout>
    );
  }
}

export default WeatherPage;
