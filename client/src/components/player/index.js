import React from "react";
import "./index.css";

const Player = (props) => {
  return (
    <div className="player-container">
      <h3>{props.whichPlayer}</h3>
    </div>
  );
};

export default Player;
