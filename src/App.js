import React, { useState } from "react";
import "./styles.css";

const playlist = ["Song One", "Song Two", "Song Three", "Song Four"];

function App() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const nextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % playlist.length);
  };

  const prevSong = () => {
    setCurrentSongIndex((prev) => (prev === 0 ? playlist.length - 1 : prev - 1));
  };

  const selectSong = (index) => {
    setCurrentSongIndex(index);
  };

  const removeSong = (index) => {
    playlist.splice(index, 1);
    if (index <= currentSongIndex && currentSongIndex > 0) {
      setCurrentSongIndex(currentSongIndex - 1);
    }
  };

  return (
    <div className="app">
      <h1>🎵 Music Playlist</h1>
      <h2>Now Playing: {playlist[currentSongIndex]}</h2>

      <div className="controls">
        <button onClick={prevSong}>⏮️ Prev</button>
        <button onClick={nextSong}>⏭️ Next</button>
      </div>

      <ul>
        {playlist.map((song, index) => (
          <li key={index}>
            <span onClick={() => selectSong(index)}>🎧 {song}</span>
            <button onClick={() => removeSong(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
