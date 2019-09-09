import React, { Component } from "react";
import config from "../helpers/config";
import BaseLayout from "./BaseLayout";
import { Link } from "react-router-dom";
import axios from "axios";
import { Media, Row, Col } from "react-bootstrap";
import Advertisement from "../components/advertisement/Advertisement";

import { returnMaxWordsInText } from "../helpers/truncate-words-in-text";

const MAX_WORDS_TO_SHOW_IN_NEWS_DESCRIPTION = 20;

class AuthorPage extends Component {
  state = {
    author: null,
    newsByAuthor: []
  };

  async componentDidMount() {
    try {
      const [authorResponse, newsByAuthorResponse] = await Promise.all([
        axios.get(`${config.API_URL}/api/author/${this.props.match.params.id}`),
        axios.get(
          `${config.API_URL}/api/news-by-author/${this.props.match.params.id}`
        )
      ]);
      this.setState({
        author: authorResponse.data,
        newsByAuthor: newsByAuthorResponse.data
      });
      console.log(authorResponse, newsByAuthorResponse);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { author, newsByAuthor } = this.state;

    if (author === null) {
      return null;
    }
    return (
      <BaseLayout>
        <Row>
          <Col xs={12} md={8}>
            <div>
              <div>
                <img src={author.image} width="200" alt={author.name} />
                <h1>{author.name}</h1>
                <div>{author.description}</div>
              </div>
              <div>
                <hr />
                <h2>News by Author</h2>
                {newsByAuthor.length > 0 ? (
                  newsByAuthor.map(item => {
                    return (
                      <Link key={item.id} to={`/news/${item.id}/${item.title}`}>
                        <Media as="li">
                          <img
                            width={200}
                            height={200}
                            className="mr-3"
                            src={item.image}
                            alt="author"
                          />
                          <Media.Body>
                            <h3>{item.title}</h3>

                            {returnMaxWordsInText(
                              item.description,
                              MAX_WORDS_TO_SHOW_IN_NEWS_DESCRIPTION
                            )}
                          </Media.Body>
                        </Media>
                      </Link>
                    );
                  })
                ) : (
                  <h3>No results</h3>
                )}
              </div>
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

export default AuthorPage;
