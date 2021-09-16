import like from "../style/like.svg";
import LikeButton from "./UI/LikeButton/LikeButton";
import AddButton from "./UI/DeleteButton/AddButton/addButton";
import { useContext } from "react";
import { SongContext } from "../App";

function SongItem({ song }) {
  const { deleteSong, likeSong } = useContext(SongContext);
  return (
    <div className="song_item">
      <div className="songs-wrapper">
        <ul className="songs">
          <h2>{song.name}</h2>
          <span>{song.author}</span>
          <p>{song.releaseDate}</p>
          <LikeButton likeSong={likeSong} song={song}>
            {song.isLiked ? (
              <img className="like-icon" src={like} alt="Like Logo" />
            ) : (
              "Like"
            )}
          </LikeButton>
          <AddButton
            customClassName="DeleteButton"
            type="submit"
            onClick={() => deleteSong(song.id)}
          >
            Delete
          </AddButton>
        </ul>
      </div>
    </div>
  );
}
export default SongItem;
