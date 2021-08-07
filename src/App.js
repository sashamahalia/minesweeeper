import { useDispatch, useSelector } from "react-redux";
import { incrementFlags } from "./redux/counter";
import { CgFlagAlt } from "react-icons/cg"
import Header from "./components/Header";

function App() {

  const { count } = useSelector(state => state.flags);
  const dispatch = useDispatch();

  const handleRightClick = event => {
    event.preventDefault();
    dispatch(incrementFlags());
  }

  return (
    <div className="App">
      
      <Header />
      <button onContextMenu={event => handleRightClick(event)}>increment</button>
    </div>
  );
}

export default App;
