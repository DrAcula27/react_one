import "./App.css";
import { useState } from "react";
import Header from "./components/header";
import Player from "./components/player";
import Board from "./components/board";

const App = () => {
  let [winner, setWinner] = useState("X");

  return (
    <div className="App">
      <Header />

      <Player whichPlayer="X" winner={winner} />
      <Player whichPlayer="O" winner={winner} />

      <Board />
    </div>
  );
};

export default App;
