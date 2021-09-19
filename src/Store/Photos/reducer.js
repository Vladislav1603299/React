import {
  GET_GISTS_REQUEST_ACTION,
  GET_GISTS_SUCCESS_ACTION,
  GET_GISTS_ERROR_ACTION,
  GET_GISTS_COMPLETE_ACTION,
} from "./constants";

const initialState = {
  loading: true,
  error: undefined,
  gists: [],
};

export const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GISTS_REQUEST_ACTION: {
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    }
    case GET_GISTS_SUCCESS_ACTION: {
      return {
        ...state,
        gists: action.payload,
      };
    }
    case GET_GISTS_COMPLETE_ACTION: {
      return {
        ...state,
        loading: false,
      };
    }
    case GET_GISTS_ERROR_ACTION: {
      return {
        ...state,
        error: true,
      };
    }

    default:
      return state;
  }
};
