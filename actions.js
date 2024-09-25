// actions.js
export function fetchData(page) {
  return async dispatch => {
    dispatch({ type: 'FETCH_DATA_START' });

    try {
      const response = await fetch(`https://reqres.in/api/users?page=${page}&per_page=8`,{});
      const data = await response.json();

      dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_DATA_ERROR', payload: error });
    }
  };
}