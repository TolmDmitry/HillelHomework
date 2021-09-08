// import { count } from "console";
// import { useState } from "react";
import App from "../App";
import songs from "../script";
// import App from "../App";

function Playlist() {
  return (
    <div className="song_item">
      <input className="input-box" type="text" placeholder="Song..." />
      <input className="button add" type="button" value="Add new song" />
      <p className="count-title">
        Count of songs: <span className="count"> {songs.length} </span>
      </p>
    </div>
  );
}
export default Playlist;
