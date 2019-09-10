import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import queryString from "query-string";

class BaseSearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = { searchText: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    const values = queryString.parse(this.props.location.search);
    this.setState({ searchText: values.search });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { searchText } = this.state;
    this.props.history.push(`/search?search=${searchText}`);
    window.location.reload();
  }

  handleChange(event) {
    this.setState({ searchText: event.target.value });
  }

  render() {
    return (
      <Form
        inline
        className="search-area"
        method="get"
        onSubmit={this.handleSubmit}
      >
        <Form.Group controlId="formBasicPassword">
          <Form.Control
            type="search"
            placeholder="Search ..."
            name="search"
            value={this.state.searchText || ""}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button variant="outline-danger" type="submit">
          Search
        </Button>
      </Form>
    );
  }
}

const SearchForm = withRouter(BaseSearchForm);
export default SearchForm;
