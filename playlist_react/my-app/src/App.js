import SongItem from "./components/Songitem";
import React, { useState } from "react";
import './style/App.css';
import songsArr from "./script";
import Playlist from "./components/Playlist";
import NewSongModal from './components/UI/modal/AddNewSongModal';
import AddButton from "./components/UI/DeleteButton/AddButton/addButton";
import Counter from "./components/UI/Counter/Counter";
import SongList from "./components/UI/SongList/SongList";


function App() {
  const [songs, setSong] = useState(songsArr);
  const [modal, setModal] = useState(false);

  const generateId = () => {
    if (!songs.length) {
      return 1;
    }
    return songs[songs.length - 1].id + 1
  };

  const addNewSong = (songName) => {
    setSong([...songs, songName])
  }

  const deleteSong = (songId) => {
    const filteredSongs = songs.filter(song => song.id !== songId);
    setSong(filteredSongs);
  }

  const likeSong = (songId) => {

    const mappedSongs = songs.map(song => song.id === songId ? (song.isLiked ? { ...song, isLiked: false } : { ...song, isLiked: true }) : song);
    setSong(mappedSongs)
  }

  return (
    <div className="App">
      <AddButton type='submit'
        customClassName='AddButton'
        onClick={() => setModal(true)}
      >Create new song</AddButton>
      <Counter songs={songs} customClassName='counter' />
      <NewSongModal visible={modal} setVisible={setModal}>
        <Playlist addNewSong={addNewSong} generateId={generateId} />
      </NewSongModal>
      <SongList songs={songs} deleteSong={deleteSong} likeSong={likeSong} />
    </div >
  )
}

export default App;
