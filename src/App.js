import { useDispatch, useSelector } from "react-redux";
import { incrementFlags } from "./redux/counter";

function App() {

  const { count } = useSelector(state => state.flags);
  const dispatch = useDispatch();

  const handleRightClick = event => {
    event.preventDefault();
    dispatch(incrementFlags());
  }

  return (
    <div className="App">
      <h1> The count is {count}</h1>
      <button onContextMenu={event => handleRightClick(event)}>increment</button>
    </div>
  );
}

export default App;
