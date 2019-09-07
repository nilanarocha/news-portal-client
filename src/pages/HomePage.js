import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import BaseLayout from "./BaseLayout";

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
            `http://localhost:3000/api/search?limit=${MAX_NUMBER_NEWS_PER_CATEGORY}&news_category=${newsCategory}`
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
        <div>
          <h2>World</h2>
          {world.length > 0 ? (
            world.map(item => {
              return (
                <Link key={item.id} to={`/news/${item.id}/${item.title}`}>
                  <div>
                    <img src={item.image} alt="author" width="100" />
                    <h3>{item.title}</h3>
                    <div>
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
        <div>
          <h2>Entertainment</h2>
          {entertainment.length > 0 ? (
            entertainment.map(item => {
              return (
                <Link key={item.id} to={`/news/${item.id}/${item.title}`}>
                  <div>
                    <img src={item.image} alt="author" width="100" />
                    <h3>{item.title}</h3>
                    <div>
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

export default HomePage;
