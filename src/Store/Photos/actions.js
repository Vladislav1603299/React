import {
  GET_GISTS_REQUEST_ACTION,
  GET_GISTS_SUCCESS_ACTION,
  GET_GISTS_ERROR_ACTION,
  GET_GISTS_COMPLETE_ACTION,
} from "./constants";

export const getGistsRequestAction = () => ({
  type: GET_GISTS_REQUEST_ACTION,
});

export const getGistsSuccessAction = () => ({
  type: GET_GISTS_SUCCESS_ACTION,
});

export const getGistsErrorAction = () => ({
  type: GET_GISTS_ERROR_ACTION,
});

export const getGistsCompleteAction = () => ({
  type: GET_GISTS_COMPLETE_ACTION,
});

const GET_GISTS_URL = "https://api.thecatapi.com/v1/images/search";

export const getGistsAction = (payload) => async (dispatch, getState) => {
  try {
    dispatch(getGistsRequestAction());
    const responce = await fetch(GET_GISTS_URL);

    if (!responce.ok) {
      throw new Error(`Error occured ${responce.status}`);
    }

    const result = await responce.json();

    dispatch(getGistsSuccessAction(result));
  } catch (error) {
    dispatch(getGistsErrorAction());
  } finally {
    dispatch(getGistsCompleteAction());
  }
};
