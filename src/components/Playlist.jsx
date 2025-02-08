import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import "./Playlist.css";

const songs = [
  {
    id: 1,
    title: "Tum Hi Ho",
    artist: "Arijit Singh",
    movie: "Aashiqui 2",
    image: "https://link-to-song-image1.jpg",
    audio: "https://link-to-song1.mp3",
  },
  {
    id: 2,
    title: "Perfect",
    artist: "Ed Sheeran",
    movie: "Divide Album",
    image: "https://link-to-song-image2.jpg",
    audio: "https://link-to-song2.mp3",
  },
  {
    id: 3,
    title: "Raabta",
    artist: "Arijit Singh",
    movie: "Agent Vinod",
    image: "https://link-to-song-image3.jpg",
    audio: "https://link-to-song3.mp3",
  },
  {
    id: 4,
    title: "Photograph",
    artist: "Ed Sheeran",
    movie: "Multiply Album",
    image: "https://link-to-song-image4.jpg",
    audio: "https://link-to-song4.mp3",
  },
  {
    id: 5,
    title: "Tera Ban Jaunga",
    artist: "Akhil Sachdeva, Tulsi Kumar",
    movie: "Kabir Singh",
    image: "https://link-to-song-image5.jpg",
    audio: "https://link-to-song5.mp3",
  },
  {
    id: 6,
    title: "Dil Dhadakne Do",
    artist: "Priyanka Chopra, Farhan Akhtar",
    movie: "Zindagi Na Milegi Dobara",
    image: "https://link-to-song-image6.jpg",
    audio: "https://link-to-song6.mp3",
  },
];

export default function PlaylistPage() {
  const [currentSong, setCurrentSong] = useState(null);

  const playSong = (audioSrc) => {
    if (currentSong) {
      currentSong.pause();
    }
    const newAudio = new Audio(audioSrc);
    newAudio.play();
    setCurrentSong(newAudio);
  };

  return (
    <div className="playlist-container">
      <h1 className="playlist-title">💖 Our Playlist 💖</h1>
      <div className="playlist-list">
        {songs.map((song, index) => (
          <motion.div
            key={song.id}
            className="playlist-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={song.image}
              alt={song.title}
              className="playlist-image"
            />
            <div className="playlist-info">
              <h2 className="playlist-song-title">{song.title}</h2>
              <p className="playlist-artist">{song.artist} • {song.movie}</p>
            </div>
            <button
              className="playlist-play-button"
              onClick={() => playSong(song.audio)}
            >
              <Play size={20} />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
