import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from "./actions";

const initialState = {
  data: null,
  isLoading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_DATA_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case FETCH_DATA_SUCCESS:
      return {
        data: action.payload,
        isLoading: false
      };

    case FETCH_DATA_ERROR:
      return {
        error: action.payload,
        isLoading: false
      };

    default:
      return state;
  }
};

export default reducer;
