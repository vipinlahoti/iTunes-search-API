import { FETCH_SEARCH } from '../actions/constants';

const initialState = {
  items: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_SEARCH:
      return {
        ...state,
        items: [...action.payload]
      }
      break;
    default:
      return state;
  }
}
