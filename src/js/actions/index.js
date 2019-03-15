
import { CHANGE_PLAYER, SELECT_SQUARE } from "../constants/action-types";

export function selectSquare(payload) {
    console.log('LOG-SelectSquare', payload);
    return { type: SELECT_SQUARE, payload }
  };

export function changePlayer(payload) {
  console.log('LOG-ChangePlayer', payload);
  return { type: CHANGE_PLAYER, payload }
};
