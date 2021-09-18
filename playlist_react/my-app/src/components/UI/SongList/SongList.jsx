import SongItem from "../../Songitem";

function SongList({ songs }) {
  return songs.map((song) => <SongItem song={song} />);
}

export default SongList;
