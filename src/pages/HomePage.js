import React, { Component } from "react";
import config from "../helpers/config";
import { Link } from "react-router-dom";
import axios from "axios";
import { Media, Row, Col } from "react-bootstrap";
import BaseLayout from "./BaseLayout";
import Advertisement from "../components/advertisement/Advertisement";

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
              <h2>World</h2>
              {world.length > 0 ? (
                <ul className="list-unstyled">
                  {world.map(item => {
                    return (
                      <Link key={item.id} to={`/news/${item.id}/${item.title}`}>
                        <Media as="li">
                          <img
                            width={200}
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
                      </Link>
                    );
                  })}
                </ul>
              ) : (
                <h3>No results</h3>
              )}
            </div>
            <div>
              <h2>Entertainment</h2>
              {entertainment.length > 0 ? (
                <ul className="list-unstyled">
                  {entertainment.map(item => {
                    return (
                      <Link key={item.id} to={`/news/${item.id}/${item.title}`}>
                        <Media as="li">
                          <img
                            width={200}
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
                      </Link>
                    );
                  })}
                </ul>
              ) : (
                <h3>No results</h3>
              )}
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

export default HomePage;
