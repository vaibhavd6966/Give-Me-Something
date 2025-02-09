import { useState } from "react";
import { motion } from "framer-motion";
import HomePage from "./components/HomePage";
import Memories from "./components/Memories";
import Timeline from "./components/Timeline";
import LoveLetter from "./components/LoveLetter";
import PlaylistPage from "./components/Playlist";
import BirthdayWish from "./components/BirthdayWish";
import QuizModule from "./components/ValentineQuiz";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <HomePage />
      <Memories />
      <Timeline />
      <LoveLetter />
      <PlaylistPage />
      <BirthdayWish />
      <QuizModule />
      <Footer />
    </div>
  );
}
