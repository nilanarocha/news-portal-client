import React, { Component } from "react";
import config from "../helpers/config";
import BaseLayout from "./BaseLayout";
import axios from "axios";
import { formatDate } from "../helpers/format-date";
import { Link } from "react-router-dom";

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
        <div>
          <img src={news.image} width="200" alt={news.title} />
          <h1>{news.title}</h1>
          <p>
            {news.category.name} -{" "}
            <Link to={`/author/${news.authors_id}`}>By {news.author.name}</Link>
            , {formatDate(news.date)}{" "}
          </p>
          <p>{news.headline}</p>

          <div>{news.description}</div>
        </div>
      </BaseLayout>
    );
  }
}

export default NewsPage;
