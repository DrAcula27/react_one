import React from "react";
import "./App.css";
import Header from "./components/header";
import Player from "./components/player";
import Board from "./components/board";
import Moves from "./components/moves";

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([{ squares: squares }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((value, moveIndex) => {
      const desc = moveIndex ? "Go to move #" + moveIndex : "Go to game start";
      return (
        <li key={moveIndex}>
          <button onClick={() => this.jumpTo(moveIndex)}>{desc}</button>
        </li>
      );
    });

    let status;

    if (winner) {
      status = `${winner} wins!`;
    } else {
      status = `Player: ${this.state.xIsNext ? "X" : "O"}'s Turn`;
    }

    return (
      <div className="game">
        <Header />
        <div className="board-and-history">
          <div className="game-board">
            <Player whichPlayer={status} />

            <Board
              squares={current.squares}
              onClick={(i) => this.handleClick(i)}
            />
          </div>
          <Moves moves={moves} />
        </div>
      </div>
    );
  }
}

export default Game;
