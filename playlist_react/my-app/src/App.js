import SongItem from "./components/Songitem";
import React, { useState } from "react";
import './style/App.css';
import songsArr from "./script";
import Playlist from "./components/Playlist";

function App() {
  const [songs, setSong] = useState(songsArr);

  const addNewSong = (songName) => {
    setSong([...songs, { name: songName, isLiked: false }])
  }

  const deleteSong = (songName) => {
    const filteredSongs = songs.filter(song => song.name !== songName);
    setSong(filteredSongs);
  }

  const likeSong = (songName) => {
    const mappedSongs = songs.map(song => song.name === songName ? { ...song, isLiked: true } : song);
    setSong(mappedSongs)
  }

  return (
    <div className="App">
      <Playlist count={songs.length} addNewSong={addNewSong} />
      {songs.map(song => <SongItem song={song} deleteSong={deleteSong} key={song.name} likeSong={likeSong} />)}
    </div>
  )
}

export default App;
