import React, { Component } from "react";
import config from "../helpers/config";
import BaseLayout from "./BaseLayout";
import { Link } from "react-router-dom";
import axios from "axios";
import { returnMaxWordsInText } from "../helpers/truncate-words-in-text";
import { Media, Row, Col } from "react-bootstrap";
import Advertisement from "../components/advertisement/Advertisement";
import Weather from "../components/weather/Weather";

import "./NewsCategoryPage.css";

const MAX_WORDS_TO_SHOW_IN_NEWS_DESCRIPTION = 20;
class NewsCategoryPage extends Component {
  state = {
    news: []
  };

  // react function that checks if the components needs to be update or not.
  // It's required because the react-router doesn't remove the component
  // when category prop is changed.
  async componentDidUpdate(newProps) {
    if (
      newProps.match &&
      this.props.match &&
      newProps.match.params.category !== this.props.match.params.category
    ) {
      await this.fetchNewsByCategory();
    }
  }

  async componentDidMount() {
    await this.fetchNewsByCategory();
  }

  async fetchNewsByCategory() {
    try {
      const { match } = this.props;

      const search = [];
      if (match.params.category) {
        search.push(`news_category=${match.params.category}`);
      }

      const response = await axios.get(
        `${config.API_URL}/api/search?${search.join("&")}`
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

    return (
      <BaseLayout>
        <Row>
          <Col xs={12} md={8}>
            <div>
              <div className="containerNewsCategory">
                {news.length > 0 ? (
                  <ul className="list-unstyled">
                    {news.map(item => {
                      return (
                        <Link
                          className="linkNews"
                          key={item.id}
                          to={`/news/${item.id}/${item.title}`}
                        >
                          <Media className="cards" as="li">
                            <img
                              width={200}
                              height={200}
                              className="mr-3 image-news"
                              src={item.image}
                              alt="author"
                            />
                            <Media.Body>
                              <h3>{item.title}</h3>
                              <div>
                                {returnMaxWordsInText(
                                  item.description,
                                  MAX_WORDS_TO_SHOW_IN_NEWS_DESCRIPTION
                                )}
                              </div>
                            </Media.Body>
                          </Media>
                          <hr />
                        </Link>
                      );
                    })}
                  </ul>
                ) : (
                  <h3>No results</h3>
                )}
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

export default NewsCategoryPage;
