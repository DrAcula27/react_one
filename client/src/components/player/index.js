import React from "react";
import "./index.css";

const Player = (props) => {
  let { whichPlayer } = props;
  return (
    <div className="player-container">
      <h3>Player {whichPlayer}</h3>
      <p>Wins: ?</p>
    </div>
  );
};

export default Player;
