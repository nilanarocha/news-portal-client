import React, { Component } from 'react';
import BaseLayout from './BaseLayout';
import config from '../helpers/config';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import './AuthorsPage.css';
import { returnMaxWordsInText } from '../helpers/truncate-words-in-text';
import Advertisement from '../components/advertisement/Advertisement';
import Weather from '../components/weather/Weather';

const MAX_WORDS_TO_SHOW_IN_NEWS_DESCRIPTION = 20;
class AuthorsPage extends Component {
  state = {
    authors: []
  };

  async componentDidMount() {
    try {
      const response = await axios.get(`${config.API_URL}/api/author`);
      this.setState({
        authors: response.data
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  P;
  render() {
    const { authors } = this.state;

    return (
      <BaseLayout>
        <Row>
          {authors.length > 0 ? (
            authors.map(author => {
              return (
                <Col key={author.id} xs={12} sm={6} md={4} lg={4}>
                  <Link className="linkAuthors" to={`/author/${author.id}`}>
                    <div className="image-flip">
                      <div className="mainflip">
                        <div className="frontside">
                          <div className="card">
                            <div className="card-body text-center">
                              <p>
                                <img
                                  className=" img-fluid"
                                  src={author.image}
                                  alt="author"
                                  width="100"
                                />
                              </p>
                              <h4 className="card-title">{author.title}</h4>

                              <div>
                                {' '}
                                <p>
                                  {returnMaxWordsInText(
                                    author.description,
                                    MAX_WORDS_TO_SHOW_IN_NEWS_DESCRIPTION
                                  )}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Col>
              );
            })
          ) : (
            <h3>No results</h3>
          )}
          <Col xs={12} md={4}>
            <Weather />
            <Advertisement />
          </Col>
        </Row>
      </BaseLayout>
    );
  }
}

export default AuthorsPage;
