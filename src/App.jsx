import React, { Component } from "react";

import "./assets/stylesheets/style.scss";
import SearchBar from "./components/SearchBar.jsx";
import VideoList from "./components/VIdeoList.jsx";
import youtube from "./api/youtube";

export default class App extends Component {
  state = { videos: [] };

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <span>Found {this.state.videos.length} videos.</span>
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}
