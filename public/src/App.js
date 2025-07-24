import React, { useState } from 'react';
import './styles.css';

const App = () => {
  const [songs, setSongs] = useState([
    "Shape of You",
    "Blinding Lights",
    "Dance Monkey",
    "Bad Guy",
    "Levitating",
    "Perfect"
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const playSong = (index) => {
    setCurrentIndex(index);
  };

  const nextSong = () => {
    setCurrentIndex((prev) => (prev + 1) % songs.length);
  };

  const prevSong = () => {
    setCurrentIndex((prev) => (prev - 1 + songs.length) % songs.length);
  };

  const removeSong = (indexToRemove) => {
    const updatedSongs = songs.filter((_, index) => index !== indexToRemove);
    setSongs(updatedSongs);
    if (indexToRemove === currentIndex && updatedSongs.length > 0) {
      setCurrentIndex(0); // Reset to first song if current is removed
    } else if (updatedSongs.length === 0) {
      setCurrentIndex(-1); // No songs left
    } else if (indexToRemove < currentIndex) {
      setCurrentIndex(currentIndex - 1); // Adjust current index
    }
  };

  return (
    <div className="playlist-container">
      <h1>🎵 Music Playlist 🎵</h1>
      {songs.length === 0 ? (
        <p>No songs in playlist.</p>
      ) : (
        <>
          <div className="current-song">▶️ Now Playing: {songs[currentIndex]}</div>
          <div className="controls">
            <button onClick={prevSong}>⏮️ Prev</button>
            <button onClick={nextSong}>⏭️ Next</button>
          </div>
          <ul className="song-list">
            {songs.map((song, index) => (
              <li key={index} className={index === currentIndex ? 'playing' : ''}>
                <span onClick={() => playSong(index)}>{song}</span>
                <button className="remove-btn" onClick={() => removeSong(index)}>❌</button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default App;
