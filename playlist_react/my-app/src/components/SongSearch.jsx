import SongInput from "./UI/CustomInput/SongInput";

function SongSearch({ searchQuery, setSearchQuery }) {
  return (
    <SongInput
      value={searchQuery}
      placeholder="Search song by name..."
      onChange={(event) => setSearchQuery(event.target.value)}
    />
  );
}

export default SongSearch;
