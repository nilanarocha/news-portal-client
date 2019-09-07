import React, { Component } from "react";
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
      <form className="search-area" method="get" onSubmit={this.handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-8">
            <label htmlFor="search">Search</label>
            <input
              className="search-area form-control form-control-lg"
              type="search"
              name="search"
              id="search"
              value={this.state.searchText || ""}
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-lg col btn btn-dark"
          >
            Search
          </button>
        </div>
      </form>
    );
  }
}

const SearchForm = withRouter(BaseSearchForm);
export default SearchForm;
