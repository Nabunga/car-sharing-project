import { GET_SELECTED_COLOR, GET_START_DATE, GET_END_DATE, GET_RATE, GET_SELECTED_RATE, GET_ADD_OPTIONS } from "./actions";

const defaultState = {
  selectedColor: "",
  startDate: null,
  endDate: null,
  rate: [],
  selectedRate: "",
  addOptions: [],
};

export const additionallyReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_SELECTED_COLOR:
      return { ...state, selectedColor: action.payload };
    case GET_START_DATE:
      return { ...state, startDate: action.payload };
    case GET_END_DATE:
      return { ...state, endDate: action.payload };
    case GET_RATE:
      return { ...state, rate: action.payload };
    case GET_SELECTED_RATE:
      return { ...state, selectedRate: action.payload };
    case GET_ADD_OPTIONS:
      return { ...state, addOptions: action.payload };

    default:
      return state;
  }
};
