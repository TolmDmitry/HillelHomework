import React, { useState } from "react";
import AddButton from "./UI/DeleteButton/AddButton/addButton";
import SongInput from "./UI/CustomInput/SongInput";

const Playlist = ({ addNewSong, generateId }) => {
  const [songName, setSongName] = useState({
    author: "",
    releaseDate: "",
    name: "",
    isLiked: false,
  });

  const handleAddSong = (event) => {
    event.preventDefault();

    const newSong = {
      ...songName,
      id: generateId,
    };

    addNewSong(newSong);
  };
  return (
    <div className="song_item">
      <form>
        <SongInput
          name="name"
          className="input-box"
          type="text"
          value={songName.name}
          onChange={(e) => setSongName({ ...songName, name: e.target.value })}
          placeholder="Song name..."
        ></SongInput>
        <SongInput
          name="author"
          className="input-box"
          type="text"
          value={songName.author}
          onChange={(e) => setSongName({ ...songName, author: e.target.value })}
          placeholder="Song author..."
        ></SongInput>
        <SongInput
          name="releaseDate"
          className="input-box"
          type="text"
          value={songName.releaseDate}
          onChange={(e) =>
            setSongName({ ...songName, releaseDate: e.target.value })
          }
          placeholder="Song release year..."
        ></SongInput>
        <AddButton
          type="submit"
          onClick={handleAddSong}
          customClassName="AddButton"
        >
          Create song
        </AddButton>
      </form>
    </div>
  );
};
export default Playlist;
