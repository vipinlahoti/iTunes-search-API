import { combineReducers } from 'redux';
import searchReducer from './reducerFn';

export default combineReducers({
  searchList: searchReducer
});
