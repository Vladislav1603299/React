import { TOGGLE_SHOW_ACCORDION_ACTION } from "./constants";
import AccordionList from "../../components/Accordion/Accordion";

const initialState = {
  accordion: <AccordionList />,
  showAccordion: true,
};

export const profileReducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case TOGGLE_SHOW_ACCORDION_ACTION:
      return {
        ...state,
        showAccordion: !state.showAccordion,
      };
    default:
      return state;
  }
};
