import axios from 'axios';

export const FETCH_DOG_DATA_START = 'FETCH_DOG_DATA_START';
export const FETCH_DOG_DATA_SUCCESS = 'FETCH_DOG_DATA_SUCCESS';
export const FETCH_DOG_DATA_FAILURE = 'FETCH_DOG_DATA_FAILURE';

export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCH_DOG_DATA_START });
    axios
      .get('https://dog.ceo/api/breeds/image/random')
      .then(res => {
        // res.data.data
        console.log('res from dogapiActions', res);
        dispatch({ type: FETCH_DOG_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_DOG_DATA_FAILURE, payload: err.response });
      });
  };
};
