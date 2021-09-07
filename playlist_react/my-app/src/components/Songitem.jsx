import songs from "../script";

function SongItem() {
  return (
    <div className="song_item">
      <div class="songs-wrapper">
        <ul class="songs">
          <button className="like button">Like</button>
          <button className="delet button">Delete</button>
        </ul>
      </div>
    </div>
  );
}
export default SongItem;
