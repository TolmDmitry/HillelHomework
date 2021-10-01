import React, { Component } from "react";
// import { src } from "../constants";
// import VideoItem from "./VideoItem";

class VideoList extends Component {
  render() {
    // this.props.videos.map((video) => {
    //   console.log("video", video.id.videoId);
    // });
    return (
      <div>
        <h1>{this.props.videos}</h1>
        <div className="image-list">
          {/* this.state.video.map((item, i) => <h1 key={i}>{item.snippet.title}<h1>) .
          {this.props.videos.map((video, i) => {
            <iframe
              width="560"
              height="315"
              src={("https://www.youtube.com/embed", video.id.idVideo)}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>;
          })} */}
        </div>
        <p>discritoion</p>
      </div>
    );
  }
}
export default VideoList;

//   render() {
//     return (
//       <div className="image-list">
//         {this.props.images.map((image) => (
//           <VideoItem key={image.id} image={image} />
//         ))}
//       </div>
//     );
//   }
// }
