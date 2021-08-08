import { Grid, Cell } from "styled-css-grid";
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux";
import { incrementFlags, incrementTurns } from "../redux/counter";
import _ from "lodash";
import { FaBomb } from "react-icons/fa"

function BombGrid() {

  const Button = styled.button`
  background: lightgreen;
  border: 2px solid black;
  color: black;
  margin: 0;
  padding: 3em 3em;
`
const dispatch = useDispatch();

const { bombs } = useSelector(state => state.mines);

const handleRightClick = event => {
  event.preventDefault();
  dispatch(incrementFlags());
  dispatch(incrementTurns());
}

console.log(Button.id);
const handleLeftClick = event => {
  const square = Number(event.target.dataset.index);
  // Get the index from square clicked on. If it matches one of the random bomb indexes, a bomb icon replaces the default view.
  if (square === bombs.find(element => element === square)) {
    console.log('match');
    event.target.firstChild.data = "bomb"
  }
  console.log(square);
  console.log(event.target.firstChild.data);
  dispatch(incrementTurns());
}
// Creates 256 cells, shows bomb icon if cell matches random mine generation.
  const cells = [..._.range(256)].map(index => 
    <Cell
      key={index}
      >
      <Button data-index={index} onClick={event => handleLeftClick(event)} onContextMenu={event => handleRightClick(event)}>
          {
            "s"
          }
        </Button>
      </Cell>
    )

  return (
    <Grid gap={"0px"} columns={16}>
      {cells}
    </Grid>
  )
}

export default BombGrid;