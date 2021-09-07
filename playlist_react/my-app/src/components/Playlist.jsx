function Playlist() {
  return (
    <div className="song_item">
      <input class="input-box" type="text" placeholder="Song..." />
      <input class="button add" type="button" value="Add new song" />
      <p class="count-title">
        Count of songs: <span class="count"> 0 </span>
      </p>
    </div>
  );
}
export default Playlist;
