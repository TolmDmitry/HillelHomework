import React, { Component } from "react";
import VideoItem from "./VideoItem";

class VideoList extends Component {
  render() {
    const renderedVideos = this.props.videos.map((video) => {
      return (
        <VideoItem
          key={video.id.videoId}
          video={video}
          handleVideoSelect={this.props.handleVideoSelect}
        />
      );
    });
    return <div className="ui-relaxed-divided-list">{renderedVideos}</div>;
  }
}
export default VideoList;
