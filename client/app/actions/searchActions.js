import { FETCH_SEARCH } from './constants';

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

export { fetchSearch };
