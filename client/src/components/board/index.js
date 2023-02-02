import React from "react";
import Square from "../square";
import "./index.css";

// const Board = () => {
//   return (
//     <div className="board">
//       <h1>Board</h1>
//       <div className="square-container">
//         <Square whichSquare="1" />
//         <Square whichSquare="2" />
//         <Square whichSquare="3" />
//         <Square whichSquare="4" />
//         <Square whichSquare="5" />
//         <Square whichSquare="6" />
//         <Square whichSquare="7" />
//         <Square whichSquare="8" />
//         <Square whichSquare="9" />
//       </div>
//     </div>
//   );
// };

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = { squares: Array(9).fill(null) };
  }

  renderSquare(i) {
    return <Square value={this.state.squares[i]} />;
  }

  render() {
    const status = "Next player: X";

    return (
      <div className="board">
        <h2 className="status">{status}</h2>
        <div className="square-container">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;
