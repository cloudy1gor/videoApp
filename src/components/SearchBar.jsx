import React, { Component } from "react";

export default class SearchBar extends Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    // проп onFormSubmit, который находится в App меняет term в state компонента
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search ui segment">
        <form className="ui form" action="#" onSubmit={this.onFormSubmit}>
          <div className="ui field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
