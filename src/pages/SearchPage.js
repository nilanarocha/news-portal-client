import React, { Component } from "react";
import { Link } from "react-router-dom";
import BaseLayout from "./BaseLayout";
import queryString from "query-string";
import axios from "axios";

import { Media, Row, Col } from "react-bootstrap";

import { returnMaxWordsInText } from "../helpers/truncate-words-in-text";
import Advertisement from "../components/advertisement/Advertisement";

const MAX_WORDS_TO_SHOW_IN_NEWS_DESCRIPTION = 20;

class SearchPage extends Component {
  state = {
    search: []
  };

  async componentDidMount() {
    try {
      const search = [];
      const values = queryString.parse(this.props.location.search);

      if (values.search) {
        search.push(`search=${values.search}`);
      }
      if (values.news_category) {
        search.push(`news_category=${values.news_category}`);
      }

      const response = await axios.get(
        `http://localhost:3000/api/search?${search.join("&")}`
      );
      this.setState({
        search: response.data
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { search } = this.state;
    const { location } = this.props;

    return (
      <BaseLayout>
        <Row>
          <Col xs={12} md={8}>
            <div>
              <h3>
                Result of the search by "{location.search}" ({search.length})
              </h3>

              {search.length > 0 ? (
                <ul className="list-unstyled">
                  {search.map(item => {
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

export default SearchPage;
