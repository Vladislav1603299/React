import { TOGGLE_SHOW_NAME } from "./constants";

const initialState = {
  showName: false,
  name: "Text",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SHOW_NAME:
      return {
        ...state,
        showName: !state.showName,
      };
    default:
      return state;
  }
};
