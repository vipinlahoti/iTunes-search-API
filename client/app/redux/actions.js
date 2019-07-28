import { FETCH_SEARCH, ADD_FAV } from './constants';

function fetchSearch(item) {
  return (dispatch) => {
    fetch(`/searchapi?searchId=${item}`)
      .then(res => res.json())
      .then(items => dispatch({
        type: FETCH_SEARCH,
        payload: [items]
      }));
  }
}

function setFavorites(item) {
  return {
    type: ADD_FAV,
    payload: [item]
  }
}

export { fetchSearch, setFavorites };
