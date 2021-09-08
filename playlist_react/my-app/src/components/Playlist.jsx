import React, { useState } from "react";

const Playlist = ({ count, addNewSong }) => {
  const [songName, setSongName] = useState("");
  const handleAddSong = () => {
    addNewSong(songName);
    setSongName("");
  };
  return (
    <div className="song_item">
      <input
        className="input-box"
        type="text"
        value={songName}
        onChange={(e) => setSongName(e.target.value)}
        placeholder="Song..."
      />
      <input
        className="button add"
        type="button"
        onClick={handleAddSong}
        value="Add new song"
      />
      <p className="count-title">
        Count of songs: <span className="count-title span"> {count} </span>
      </p>
    </div>
  );
};
export default Playlist;
