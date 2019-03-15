import { combineReducers } from "redux";
import boardReducer from "./board-reducer";
import gameReducer from "./game-reducer";

export default combineReducers({
  boardReducer,
  gameReducer
})