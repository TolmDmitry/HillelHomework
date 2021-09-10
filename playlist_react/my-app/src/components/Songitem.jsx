// import songs from "../script";
import like from "../style/like.svg";
import LikeButton from "./UI/LikeButton/LikeButton";
import AddButton from "./UI/DeleteButton/AddButton/addButton";

const SongItem = ({ song, deleteSong, likeSong }) => (
  <div className="song_item">
    <div className="songs-wrapper">
      <ul className="songs">
        <h2>{song.name}</h2>
        <span>{song.author}</span>
        <p>{song.releaseDate}</p>
        {song.isLiked ? (
          <img className="like-icon" src={like} alt="React Logo" />
        ) : (
          <LikeButton
            likeSong={likeSong}
            song={song}
            customClassName="likeButton"
          />
        )}
        <AddButton
          customClassName="DeleteButton"
          type="submit"
          onClick={() => deleteSong(song.name)}
        >
          Delete
        </AddButton>
      </ul>
    </div>
  </div>
);
export default SongItem;
