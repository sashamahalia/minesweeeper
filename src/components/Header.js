import FlagCount from "./FlagCount";
import TurnCount from "./TurnCount";
import { useSelector } from "react-redux";

function Header() {
  const { gameOver } = useSelector(state => state.mines);
  const { turnCount } = useSelector(state => state.count);

  const gameOverMessage = (
    <>
      <h1>GAME OVER</h1>
      <h2>{`Turns played: ${turnCount}`}</h2>
    </>
  )

  const inPlay = (
    <>
    <FlagCount />
    <TurnCount />
    </>
  )

  return (
    <section>
      {gameOver ? gameOverMessage : inPlay}
    </section>
  );
}

export default Header;