import React, { Component } from "react";
import BaseLayout from "./BaseLayout";
import { Link } from "react-router-dom";
import axios from "axios";

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
        axios.get(
          `http://localhost:3000/api/author/${this.props.match.params.id}`
        ),
        axios.get(
          `http://localhost:3000/api/news-by-author/${this.props.match.params.id}`
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
        <div>
          <div>
            <img src={author.image} width="200" alt={author.name} />
            <h1>{author.name}</h1>
            <div>{author.description}</div>
          </div>
          <div>
            <h2>News by Author</h2>
            {newsByAuthor.length > 0 ? (
              newsByAuthor.map(item => {
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
        </div>
      </BaseLayout>
    );
  }
}

export default AuthorPage;
