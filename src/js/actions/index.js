
import { ADD_ARTICLE, SELECT_SQUARE } from "../constants/action-types";

export function addArticle(payload) {
    console.log('LOG-AddArticle', payload);
    return { type: SELECT_SQUARE, payload }
  };