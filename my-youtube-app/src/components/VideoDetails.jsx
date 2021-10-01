import React from "react";

class VideoDeatils extends React.Component {
  render() {
    if (this.props.video) {
      const videoSrc = `https://www.youtube.com/embed/${this.props.video.id.videoId}`;
      return (
        <div>
          <div className="ui-embed">
            <iframe src={videoSrc} allowFullScreen title="Video player" />
          </div>
          <div className="ui-segment">
            <h4 className="ui-header">{this.props.video.snippet.title}</h4>
            <p>{this.props.video.snippet.description}</p>
          </div>
        </div>
      );
    } else {
      return <div className='loading'>Loading ...</div>;
    }
  }
}

export default VideoDeatils;
