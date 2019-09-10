import React, { Component } from "react";
import config from "../helpers/config";
import BaseLayout from "./BaseLayout";
import axios from "axios";
import { formatDate } from "../helpers/format-date";
import { Row, Col, Container } from "react-bootstrap";

import { Link } from "react-router-dom";
import Advertisement from "../components/advertisement/Advertisement";
import Weather from "../components/weather/Weather";

import "./NewsPage.css";

class NewsPage extends Component {
  state = {
    news: null
  };

  async componentDidMount() {
    try {
      const response = await axios.get(
        `${config.API_URL}/api/news/${this.props.match.params.id}`
      );
      this.setState({
        news: response.data
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { news } = this.state;

    if (news === null) {
      return null;
    }
    return (
      <BaseLayout>
        <Row>
          <Col xs={12} md={8}>
            <Container className="containerNews">
              <div>
                <h1>{news.title}</h1>

                <p className="title">
                  <Link
                    className="linkAuthorNews"
                    to={`/news/${news.category.name.toLowerCase()}`}
                  >
                    {news.category.name}
                  </Link>{" "}
                  -{" "}
                  <Link
                    className="linkAuthorNews"
                    to={`/author/${news.authors_id}`}
                  >
                    By {news.author.name}
                  </Link>
                  , {formatDate(news.date)}{" "}
                </p>
                <hr />
                <img
                  className="imgNews"
                  src={news.image}
                  width="500"
                  alt={news.title}
                />
                <hr />

                <p className="headline">{news.headline}</p>

                <div classNames="descriptionNews">{news.description}</div>
              </div>
            </Container>
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

export default NewsPage;
