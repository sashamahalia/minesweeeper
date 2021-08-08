import { Grid, Cell } from "styled-css-grid";
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux";
import { incrementFlags, incrementTurns } from "../redux/counter";
// import { isBomb, isTouchingBomb, isFlagged } from "../redux/tiles";
import { gameOver } from "../redux/mines";
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
// const { tile } =  useSelector(state => state.tiles);

const handleRightClick = event => {
  event.preventDefault();
  // dispatch(isFlagged());
  dispatch(incrementFlags());
  dispatch(incrementTurns());
}

const handleLeftClick = event => {
  const square = Number(event.target.dataset.index);
  // Get the index from square clicked on. If it matches one of the random bomb indexes, a bomb icon replaces the default view.
  if (square === bombs.find(element => element === square)) {
    // dispatch(isBomb());
    dispatch(gameOver());
    event.target.firstChild.data = "bomb"
  }

  let counter = 0;

  if (bombs.find(bomb => bomb === square - 1)) {
    counter += 1
  }
  if (bombs.find(bomb => bomb === square + 1)) {
    counter += 1
  }
  if (bombs.find(bomb => bomb === square - 15)) {
    counter += 1
  }
  if (bombs.find(bomb => bomb === square - 16)) {
    counter += 1
  }
  if (bombs.find(bomb => bomb === square - 17)) {
    counter += 1
  }
  if (bombs.find(bomb => bomb === square + 15)) {
    counter += 1
  }
  if (bombs.find(bomb => bomb === square + 16)) {
    counter += 1
  }
  if (bombs.find(bomb => bomb === square + 17)) {
    counter += 1
  }
  console.log(counter);

  if (counter) {
    event.target.firstChild.data = counter;
  }
  console.log(square);
  dispatch(incrementTurns());
}
const filter = i => {

  for (const bomb of bombs) {
    console.log('bomb', bomb)
    if (bomb === i) {
      return <FaBomb />
    }
    else {
      return 's'
    }
  }
}
// Creates 256 cells, shows bomb icon if cell matches random mine generation.
  const cells = [..._.range(256)].map(index => 
    <Cell
      key={index}
      >
      <Button data-index={index} onClick={event => handleLeftClick(event)} onContextMenu={event => handleRightClick(event)}>
          {
           " "
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