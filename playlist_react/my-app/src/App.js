import SongItem from "./components/Songitem";
import { useState } from "react";
import './style/App.css';
import songs from "./script";
import Playlist from "./components/Playlist";

function App() {
  const [song, setSong] = useState({ songs })
  return (
    <div className="App">
      <Playlist songs={songs} />

      <SongItem />
    </div>
  )
}

export default App;
