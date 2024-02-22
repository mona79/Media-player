import React from "react";
import "./Playlist.css"; // Import the corresponding CSS file

const Playlist = () => {
  return (
    <section className="playlist">
      <article className="song-item">
        <figure>
          <img src="assets/On_Your_Side_album_cover.jpg" alt="Album cover" />
        </figure>
        <div className="song-info">
          <p className="upper-text">A Rocket to the Moon</p>
          <p className="lower-text">Like We Used To</p>
        </div>
        <span className="material-icons play"> play_circle_filled </span>
      </article>
      {/* Add more song items here */}
    </section>
  );
};

export default Playlist;
