import songsArr from "../script";
import { useState } from "react";
// import App from "../App";

function SongItem(props) {
  const [songs, setSong] = useState(songsArr);
  // console.log(songs.isLiked);
  // console.log(setSongs);

  return (
    <div className="song_item">
      <div className="songs-wrapper">
        <ul className="songs">
          <button
            className="like button"
            onChange={(e) => console.log(e.target)}
          >
            Like
          </button>
          {/* <button className="delet button" onClick="">
            
          </button> */}

          <button
            className="delet button"
            onClick={(e) => console.log(e.target)}
          >
            Delete
          </button>
        </ul>
      </div>
    </div>
  );
}
export default SongItem;
