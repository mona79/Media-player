import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import MusicPlayer from "../MusicPlayer";
import Playlist from "../Playlist";

const App = () => {
  return (
    <div className="container">
      <Header />
      <MusicPlayer />
      <Playlist />
      <Footer />
    </div>
  );
};

export default App;
