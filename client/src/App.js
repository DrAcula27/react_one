import "./App.css";
import Header from "./components/header";
import Player from "./components/player";

const App = () => {
  return (
    <div className="App">
      <Header />
      {/* X */}
      <Player whichPlayer="X" />
      {/* O */}
      <Player whichPlayer="O" />
    </div>
  );
};

export default App;
