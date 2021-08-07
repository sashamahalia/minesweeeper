import { Grid, Cell } from "styled-css-grid";
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux";
import { incrementFlags } from "../redux/counter";
import _ from "lodash";
import { FaBomb } from "react-icons/fa"

function BombGrid() {

  const Button = styled.button`
  background: transparent;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`
const dispatch = useDispatch();

const { bombs } = useSelector(state => state.mines);
console.log(bombs);

const handleRightClick = event => {
  event.preventDefault();
  dispatch(incrementFlags());
}

  const cells = [..._.range(256)].map(index => 
    <Cell key={index}>
      <Button onContextMenu={event => handleRightClick(event)}>
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