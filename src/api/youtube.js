import axios from "axios";

const KEY = "AIzaSyCyJYiXc7HMrkqfsNZkPBMwlMCYV9tF_cQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet", // // на сайте
    maxResults: 5, // на сайте
    key: KEY,
  },
});

// https://developers.google.com/youtube/v3/docs/videos/list
