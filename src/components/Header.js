import React from "react";
import "./Header.css"; // Import the corresponding CSS file

const Header = () => {
  return (
    <header className="header">
      <span className="arrow-back material-icons">arrow_back_ios</span>
      <span className="header-text">Playlist - Moody</span>
      <span className="three-dots material-icons">more_vert</span>
    </header>
  );
};

export default Header;
