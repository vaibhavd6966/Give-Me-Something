import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import "./Playlist.css";

const songs = [
  {
    id: 1,
    title: "Tu Jaane Na",
    artist: "Atif Aslam",
    movie: "Ajab Prem Ki Ghazab Kahani",
    image: "https://i.scdn.co/image/ab67616d0000b2733fc744278f09205afd1e23c4",
    audio: "/songs/song1.mp3",
  },
  {
    id: 2,
    title: "Ik Lamha",
    artist: "Azaan Sami Khan",
    movie: "Ik Lamha",
    image: "https://c.saavncdn.com/905/Ik-Lamha-Hindi-2021-20211224024607-500x500.jpg",
    audio: "/songs/song2.mp3",
  },
  {
    id: 3,
    title: "Shayad",
    artist: "Arijit Singh",
    movie: "Love Aaj Kal",
    image: "https://c.saavncdn.com/172/Shayad-Film-Version-From-Love-Aaj-Kal--Hindi-2021-20210325204139-500x500.jpg",
    audio: "/songs/song3.mp3",
  },
  {
    id: 4,
    title: "Tere Hawaale",
    artist: "Arijit Singh, Shilpa Rao",
    movie: "Laal Singh Chaddha",
    image: "https://c.saavncdn.com/119/Tere-Hawaale-From-Laal-Singh-Chaddha-Hindi-2022-20220804093945-500x500.jpg",
    audio: "/songs/song4.mp3",
  },
  {
    id: 5,
    title: "Aankhon Mein Teri Ajab Si",
    artist: "K.K.",
    movie: "Om Shanti Om",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5sgJ_YKLtaxtGxd-P8aBrBa5oldpuUphyzw&s",
    audio: "/songs/song5.mp3",
  },
  {
    id: 6,
    title: "JAB TAK",
    artist: "Armaan Malik, Amaal Mallik",
    movie: "M.S. DHONI -THE UNTOLD STORY",
    image: "https://i1.sndcdn.com/artworks-000187659727-42c16u-t500x500.jpg",
    audio: "/songs/song6.mp3",
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
