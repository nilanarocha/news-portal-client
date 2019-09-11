import React, { Component } from "react";
import axios from "axios";
import { Table, Container, Button, Form, Col } from "react-bootstrap";
import "./Weather.css";

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
      <Container className="containerWeather">
        <Col xs={12}>
          <div>
            <p className="city">
              Weather Forecast{" "}
              <img
                src="https://images-eu.ssl-images-amazon.com/images/I/41wkG24yDkL.png"
                width={30}
                height={30}
                alt="weather icon"
              />
            </p>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                className="search"
                type="search"
                placeholder="Search by city"
                onInput={this._handleInput}
              />
            </Form.Group>
            <Button
              className="submit"
              type="button"
              variant="outline-danger"
              size="sm"
              onClick={this.fetchWeatherByCity}
            >
              Search
            </Button>

            <hr className="horizontalRow" />
            <div>
              {weather.length > 0 && (
                <Table className="tableWeather" striped size="sm">
                  <thead>
                    <tr>
                      <th className="tHead">City</th>
                      <th className="tHead">Today</th>
                      <th className="tHead">Temperature</th>
                    </tr>
                  </thead>
                  <tbody>
                    {weather.map(weather => (
                      <tr key={weather.weather}>
                        <td>{weather.city_name}</td>
                        <td>{weather.weather.description}</td>
                        <td>{weather.app_temp}°</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
            </div>
          </div>
        </Col>
      </Container>
    );
  }
}

export default WeatherPage;
