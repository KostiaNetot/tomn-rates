import DataService from "../services/dataService";

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';

const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST
});

const fetchDataSuccess = (res) => ({
  type: FETCH_DATA_SUCCESS,
  payload: res
});

const fetchDataError = (err) => ({
  type: FETCH_DATA_ERROR,
  payload: err.response
});

export const fetchData = () => {
  const dataService = new DataService();
  return dispatch => {
    dispatch(fetchDataRequest());
    dataService.getData()
      .then(res => {
        dispatch(fetchDataSuccess(res))
      })
      .catch(err => dispatch(fetchDataError(err)))
  }
};
