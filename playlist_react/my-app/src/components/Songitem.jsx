import like from "../style/like.svg";

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
          <button className="like button" onClick={() => likeSong(song.name)}>
            Like
          </button>
        )}
        <button className="delet button" onClick={() => deleteSong(song.name)}>
          Delete
        </button>
      </ul>
    </div>
  </div>
);
export default SongItem;
