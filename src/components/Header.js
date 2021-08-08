import FlagCount from "./FlagCount";
import TurnCount from "./TurnCount";
import { useSelector } from "react-redux";

function Header() {

  const { gameOver } = useSelector(state => state.mines);

  return (
    <section>
      <FlagCount />
      <TurnCount />
      <h2>{gameOver && "Game over"}</h2>
    </section>
  );
}

export default Header;