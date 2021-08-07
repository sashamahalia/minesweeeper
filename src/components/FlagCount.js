import { useSelector } from "react-redux";
import { CgFlagAlt } from "react-icons/cg"

function FlagCount() {
  const style = { color: "red", fontSize: "1.5em" }

  const { flagCount } = useSelector(state => state.flags);

  return (
      <h2> <CgFlagAlt style={style} /> {flagCount}</h2>
  );
}

export default FlagCount;