import { useSelector } from "react-redux";
import { CgFlagAlt } from "react-icons/cg"

function FlagCount() {
  const style = { color: "red", fontSize: "1.5em" }

  const { count } = useSelector(state => state.flags);

  return (
      <h2> <CgFlagAlt style={style} /> {count}</h2>
  );
}

export default FlagCount;