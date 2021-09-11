import SongItem from "../../Songitem";

function SongList({ songs, deleteSong, likeSong }) {
  return songs.map((song) => (
    <SongItem song={song} deleteSong={deleteSong} likeSong={likeSong} />
  ));
}

export default SongList;
