import React from "react";
import "./index.css";

const Player = (props) => {
  let { whichPlayer } = props;
  return (
    <div className="player-container">
      <h3>{whichPlayer}</h3>
    </div>
  );
};

export default Player;
