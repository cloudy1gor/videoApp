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

  // дефолтный поисковый запрос с выводом вариантов
  componentDidMount() {
    this.onTermSubmit("gopro hero");
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({
      videos: response.data.items,
      // автоматически выведет первый ролик
      selectedVideo: response.data.items[0],
    });
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

          <div className="ui grid">
            <div className="ui row">
              <div className="eleven wide column">
                <VideoDetail video={this.state.selectedVideo} />
              </div>

              <div className="five wide column">
                <VideoList
                  videoSelect={this.onVideoSelect}
                  videos={this.state.videos}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
