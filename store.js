// store.js
import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';

const initialState = {
  data: [{page: 1, per_page: 10, data: []}],
  view: 'list',
  loading: false,
  error: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_DATA_START':
      return { ...state, loading: true };
    case 'FETCH_DATA_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    case 'FETCH_DATA_ERROR':
      return { ...state, loading: false, error: action.payload };
      case 'TOGGLE_VIEW': // Add a new case for toggling the view
      return { ...state, view: state.view === 'list' ? 'grid' : 'list' };
 
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;