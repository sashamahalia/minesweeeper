import { useSelector } from "react-redux";
import { GiAlarmClock } from "react-icons/gi"

function TurnCount() {
  const style = { color: "red", fontSize: "1.5em" }

  const { turnCount } = useSelector(state => state.count);

  return (
      <h2> <GiAlarmClock style={style} /> {turnCount}</h2>
  );
}

export default TurnCount;