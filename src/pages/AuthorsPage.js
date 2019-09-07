import React, { Component } from "react";
import BaseLayout from "./BaseLayout";
import { Link } from "react-router-dom";
import axios from "axios";

class AuthorsPage extends Component {
  state = {
    authors: []
  };

  async componentDidMount() {
    try {
      const response = await axios.get("http://localhost:3000/api/author");
      this.setState({
        authors: response.data
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { authors } = this.state;

    return (
      <BaseLayout>
        {authors.length > 0 ? (
          authors.map(author => {
            return (
              <Link key={author.id} to={`/author/${author.id}`}>
                <div>
                  <img src={author.image} width="200" alt={author.name} />
                  <h1>{author.name}</h1>
                  <div>{author.description}</div>
                </div>
              </Link>
            );
          })
        ) : (
          <h3>No results</h3>
        )}
        <div></div>
      </BaseLayout>
    );
  }
}

export default AuthorsPage;
