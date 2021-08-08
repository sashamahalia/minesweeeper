import Header from "./components/Header";
import BombGrid from "./components/BombGrid";
import { useSelector } from "react-redux";


function App() {

  const { gameOver } = useSelector(state => state.mines);
  const { turnCount } = useSelector(state => state.count);

  const gameOverMessage = (
      <>
        <h1>GAME OVER</h1>
        <h2>{`Turns played: ${turnCount}`}</h2>
      </>
    )
  const gamePlay = (
    <>
      <Header />
      <BombGrid />
    </>
  )
  return (
    <div className="App">
      {gameOver ? gameOverMessage : gamePlay}
    </div>
  );
}

export default App;
