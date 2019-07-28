import { FETCH_SEARCH, ADD_FAV } from './constants';

const initialState = {
  items: [],
  favItems: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_SEARCH:
      return {
        ...state,
        items: [...action.payload]
      }
      break;
    case ADD_FAV:
      return {
        ...state,
        favItems: [...action.payload]
      }
      break;
    default:
      return state;
  }
}
