import { CHANGE_PLAYER } from "../constants/action-types";

const initialState = {
  xIsNext: true
};

function gameReducer(state = initialState, action) {
  console.log('LOG-GameReducer', action);
  console.log('LOG-GameReducer', action.payload);
  
  if (action.type === CHANGE_PLAYER) {
    return switchPlayer(state);
  }
  return state;
}

function switchPlayer(state) {
  return({
    xIsNext: !state.xIsNext
  });
}


export default gameReducer;