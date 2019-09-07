import React, { Component } from "react";
import BaseLayout from "./BaseLayout";
import { Link } from "react-router-dom";
import axios from "axios";
import { returnMaxWordsInText } from "../helpers/truncate-words-in-text";

const MAX_WORDS_TO_SHOW_IN_NEWS_DESCRIPTION = 20;
class NewsCategoryPage extends Component {
  state = {
    news: []
  };

  async componentDidMount() {
    try {
      const { match } = this.props;

      const search = [];
      if (match.params.category) {
        search.push(`news_category=${match.params.category}`);
      }

      const response = await axios.get(
        `http://localhost:3000/api/search?${search.join("&")}`
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
        <div>
          {news.length > 0 ? (
            news.map(item => {
              return (
                <Link key={item.id} to={`/news/${item.id}/${item.title}`}>
                  <div>
                    <img src={item.image} alt="author" width="100" />
                    <h3>{item.title}</h3>
                    <div>
                      {" "}
                      {returnMaxWordsInText(
                        item.description,
                        MAX_WORDS_TO_SHOW_IN_NEWS_DESCRIPTION
                      )}
                    </div>
                  </div>
                </Link>
              );
            })
          ) : (
            <h3>No results</h3>
          )}
        </div>
      </BaseLayout>
    );
  }
}

export default NewsCategoryPage;
