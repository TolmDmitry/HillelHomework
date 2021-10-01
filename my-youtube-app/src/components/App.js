import '../style/App.css';
import SearchInput from "./Searchinput";
// import VideoItem from './VideoItem';
import VideoList from "./VideoList";
import { searchVideos } from "../api/youtube";
import React, { Component } from 'react';



export default class App extends Component {
  state = { videos: [] };

  onSearchSubmit = async (query) => {
    const response = await searchVideos(query);
    console.log('res', response.data.items)
    console.log('this.videos', this.state.videos)
    this.setState({ videos: response.data.items });
    console.log('id', this.state.videos)
  };
  render() {
    return (
      <>
        <SearchInput onSubmit={this.onSearchSubmit} />
        <VideoList videos={this.state.videos} />
      </>
    );
  }
}

