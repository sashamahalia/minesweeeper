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

const handleLeftClick = () => {
  dispatch(incrementTurns());
}
// Creates 256 cells, shows bomb icon if cell matches random mine generation.
  const cells = [..._.range(256)].map(index => 
    <Cell key={index}>
      <Button onClick={event => handleLeftClick()} onContextMenu={event => handleRightClick(event)}>
          {
            (index === bombs.find(element => element === index) ? <FaBomb /> : "h")
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