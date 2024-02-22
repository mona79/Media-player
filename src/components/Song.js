import React from 'react';
import './Song.css'; // Import the corresponding CSS file

const Song = () => {
  return (
    <section className="song">
      <figure className="album-image-container">
        <img
          src="assets/On_Your_Side_album_cover.jpg"
          alt="Album cover"
        />
      </figure>

      <div className="song-info-container">
        <span className="add material-icons"> add_circle_outline </span>
        <div className="song-info">
          <p className="upper-text">A Rocket to the Moon</p>
          <p className="lower-text">Like We Used To</p>
        </div>
        <span className="heart material-icons"> favorite </span>
      </div>

      <div className="time-line-container">
        <span>0:40</span>
        <div className="outer-time-line">
          <div className="inner-time-line"></div>
        </div>
        <span>3:42</span>
      </div>

      <div className="controls">
        <span className="material-icons"> replay </span>
        <span className="material-icons previous"> fast_rewind </span>
        <span className="material-icons play"> play_circle_filled </span>
        <span className="material-icons next"> fast_forward </span>
        <span className="material-icons"> shuffle </span>
      </div>
    </section>
  );
}

export default Song;
