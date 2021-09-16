import React, { useState, useMemo } from "react";
import './style/App.css';
import songsArr from "./script";
import Playlist from "./components/Playlist";
import NewSongModal from './components/UI/modal/AddNewSongModal';
import AddButton from "./components/UI/DeleteButton/AddButton/addButton";
import Counter from "./components/UI/Counter/Counter";
import SongList from "./components/UI/SongList/SongList";
import SongSearch from "./components/SongSearch";
import SongSort from "./components/SongSort";

export const SongContext = React.createContext();


function App() {
  const [songs, setSong] = useState(songsArr);
  const [modal, setModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [orderBy, setOrderBy] = useState('');



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

  const modifedArray = useMemo(() => {
    return songs.filter(song => song.name.toLowerCase().startsWith(searchQuery.toLowerCase())).sort((a, b) => b[orderBy] - a[orderBy])
  }, [searchQuery, orderBy, songs])


  return (
    <div className="App">
      <div className='header'>
        <AddButton type='submit'
          customClassName='AddButton'
          onClick={() => setModal(true)}
        >Create new song</AddButton>
        <SongSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <SongSort sortQuery={orderBy} setOrderBy={setOrderBy} />
      </div>
      <Counter songs={songs} customClassName='counter' />
      <NewSongModal visible={modal} setVisible={setModal}>
        <Playlist addNewSong={addNewSong} generateId={generateId} />
      </NewSongModal>
      <SongContext.Provider value={{ deleteSong, likeSong }}>
        <SongList songs={modifedArray} />
      </SongContext.Provider>
    </div >
  )
}

export default App;
