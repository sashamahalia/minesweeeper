import { Grid, Cell } from "styled-css-grid";
import styled from 'styled-components'
import { useDispatch } from "react-redux";
import { incrementFlags } from "../redux/counter";

function BombGrid() {

  const Button = styled.button`
  background: transparent;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`
const dispatch = useDispatch();

const handleRightClick = event => {
  event.preventDefault();
  dispatch(incrementFlags());
}

  const cells = [...Array(256).keys()].map((index) => <Cell key={index}><Button onContextMenu={event => handleRightClick(event)}>h</Button></Cell>)
  return (
    <Grid gap={"0px"} columns={16}>
      {cells}
    </Grid>
  )
}

export default BombGrid;