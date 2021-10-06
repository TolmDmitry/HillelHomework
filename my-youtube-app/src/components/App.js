import '../style/App.css';
import SearchInput from "./Searchinput";
import VideoList from "./VideoList";
import { youtube } from "../api/youtube";
import React, { Component } from 'react';
import VideoDetails from "./VideoDetails";



export default class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  }
  handleSubmit = async (termFromSearchBar) => {
    const response = await youtube.get('/search', {
      params: {
        q: termFromSearchBar
      }
    })
    this.setState({
      videos: response.data.items
    })
  };
  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }
  render() {
    return (
      <div className='ui-container' style={{ marginTop: '1em' }}>
        <SearchInput handleFormSubmit={this.handleSubmit} />
        <div className='ui-grid'>
          <div className="ui-row">
            <div className="eleven-wide-column">
              <VideoDetails video={this.state.selectedVideo} />
            </div>
            <div className="five-wide-column">
              <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

