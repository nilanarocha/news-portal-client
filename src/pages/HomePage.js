import React, { Component } from "react";
import config from "../helpers/config";
import { Link } from "react-router-dom";
import axios from "axios";
import { Media, Row, Col } from "react-bootstrap";
import "./HomePage.css";

import BaseLayout from "./BaseLayout";
import Advertisement from "../components/advertisement/Advertisement";
import Weather from "../components/weather/Weather";

import { returnMaxWordsInText } from "../helpers/truncate-words-in-text";

const MAX_NUMBER_NEWS_PER_CATEGORY = 5;
const MAX_WORDS_TO_SHOW_IN_NEWS_DESCRIPTION = 20;

const NEWS_CATEGORY = ["World", "Entertainment"];
class HomePage extends Component {
  state = {
    world: [],
    entertainment: []
  };

  async componentDidMount() {
    try {
      const [worldNews, entertainmentNews] = await Promise.all(
        NEWS_CATEGORY.map(newsCategory => {
          return axios.get(
            `${config.API_URL}/api/search?limit=${MAX_NUMBER_NEWS_PER_CATEGORY}&news_category=${newsCategory}`
          );
        })
      );

      this.setState({
        world: worldNews.data,
        entertainment: entertainmentNews.data
      });
      console.log(worldNews, entertainmentNews);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { world, entertainment } = this.state;

    return (
      <BaseLayout>
        <Row>
          <Col xs={12} md={8}>
            <div>
              <div className="containerHomepage">
                <h2>World</h2>

                {world.length > 0 ? (
                  <ul className="list-unstyled">
                    {world.map(item => {
                      return (
                        <Link
                          className="linkNews"
                          key={item.id}
                          to={`/news/${item.id}/${item.title}`}
                        >
                          <Media className="cards" as="li">
                            <img
                              width={255}
                              height={200}
                              className="mr-3 image-news"
                              src={item.image}
                              alt={item.title}
                            />
                            <Media.Body>
                              <h5>{item.title}</h5>
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
              <div>
                <div className="containerHomepage">
                  <h2>Entertainment</h2>
                  {entertainment.length > 0 ? (
                    <ul className="list-unstyled">
                      {entertainment.map(item => {
                        return (
                          <Link
                            className="linkNews"
                            key={item.id}
                            to={`/news/${item.id}/${item.title}`}
                          >
                            <Media className="cards" as="li">
                              <img
                                width={250}
                                height={200}
                                className="mr-3"
                                src={item.image}
                                alt={item.title}
                              />
                              <Media.Body>
                                <h5>{item.title}</h5>
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

export default HomePage;
