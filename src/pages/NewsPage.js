import React, { Component } from 'react';
import config from '../helpers/config';
import BaseLayout from './BaseLayout';
import axios from 'axios';
import { formatDate } from '../helpers/format-date';
import WebSpeech from '../helpers/speech';
import { Row, Col, Container, Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import Advertisement from '../components/advertisement/Advertisement';
import Weather from '../components/weather/Weather';

import './NewsPage.css';

class NewsPage extends Component {
  state = {
    news: null,
  };

  Speech = new WebSpeech();

  async componentDidMount() {
    try {
      const response = await axios.get(
        `${config.API_URL}/api/news/${this.props.match.params.id}`
      );
      this.setState({
        news: response.data,
      });
      console.log(response);
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

    this.Speech.sayText(document.querySelector('').innerText, config);

    console.log('event dispatched!');
  };

  onStopReadingText = () => {
    this.Speech.stop();
  };

  render() {
    const { news } = this.state;

    if (news === null) {
      return null;
    }

    const browserSupportsWebSpeech = window.speechSynthesis;

    return (
      <BaseLayout>
        <Row>
          <Col xs={12} md={8}>
            <Container className="containerNews">
              <div className="news-content">
                <h1>{news.title}</h1>

                <p className="title">
                  <Link
                    className="linkAuthorNews"
                    to={`/news/${news.category.name.toLowerCase()}`}
                  >
                    {news.category.name}
                  </Link>{' '}
                  -{' '}
                  <Link
                    className="linkAuthorNews"
                    to={`/author/${news.authors_id}`}
                  >
                    By {news.author.name}
                  </Link>
                  , {formatDate(news.date)}{' '}
                </p>
                <hr />
                <img
                  className="image-news-item"
                  src={news.image}
                  width="500"
                  alt={news.title}
                />
                <hr />

                <p className="headline">{news.headline}</p>
                <div
                  className="descriptionNews"
                  //The prop name dangerouslySetInnerHTML is intentionally chosen
                  // to be frightening, and the prop value (an object instead of a
                  // string) can be used to indicate sanitized data.
                  dangerouslySetInnerHTML={{ __html: news.description }}
                />
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

// speech code reference:https://codesandbox.io/s/text-to-speech-playground-ev2t9?fbclid=IwAR2L4Kkj7MaynDR2OAS69Q7gS8YoSfvPGaq6oo0rb5j--an4Zm9FWO_4e0M
