import { ADD_ARTICLE, SELECT_SQUARE } from "../constants/action-types";

const initialState = {
  articles: [],
  squares: Array(9).fill(null),
  xIsNext: true
};

function rootReducer(state = initialState, action) {
  console.log('LOG-Reducer', action);
  console.log('LOG-Reducer', action.payload);
  
  if (action.type === ADD_ARTICLE) {
    //state.articles.push(action.payload);
  }
  if (action.type === SELECT_SQUARE) {
    return handleClick(state, action.payload.i);
  }
  return state;
}

function handleClick(state, selectedSquare) {
  const squares = state.squares.slice();
  squares[selectedSquare] = state.xIsNext ? 'X' : 'O';
  return({
    articles: [],
    squares: squares,
    xIsNext: !state.xIsNext,
  });
}


export default rootReducer;