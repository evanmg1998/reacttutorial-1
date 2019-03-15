import { SELECT_SQUARE } from "../constants/action-types";

const initialState = {
  squares: Array(9).fill(null)
};

function boardReducer(state = initialState, action) {
  console.log('LOG-BoardReducer', action);
  console.log('LOG-BoardReducer', action.payload);
  
 
  if (action.type === SELECT_SQUARE) {
    return handleClick(state, action.payload.square, action.payload.value);
  }
  return state;
}

function handleClick(state, selectedSquare, squareValue) {
  const squares = state.squares.slice();
  squares[selectedSquare] = squareValue;
  return({
    squares: squares
  });
}


export default boardReducer;