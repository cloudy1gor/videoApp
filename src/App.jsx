import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";

import "./assets/stylesheets/style.scss";
import SearchBar from "./components/SearchBar.jsx";
import VideoList from "./components/VIdeoList.jsx";
import VideoDetail from "./components/VideoDetail.jsx";
import youtube from "./api/youtube";

const GlobalStyles = createGlobalStyle`
body {
  background-color: #ececec;
}`;

export default class App extends Component {
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({ videos: response.data.items });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <>
        <GlobalStyles />

        <div className="ui container">
          <SearchBar onFormSubmit={this.onTermSubmit} />

          <span>Found {this.state.videos.length} videos.</span>

          <VideoDetail video={this.state.selectedVideo} />

          <VideoList
            videoSelect={this.onVideoSelect}
            videos={this.state.videos}
          />
        </div>
      </>
    );
  }
}
