import {
  GET_SELECTED_COLOR,
  GET_START_DATE,
  GET_END_DATE,
  GET_RATE,
  GET_SELECTED_RATE,
  CHANGE_TANK_OPTION,
  CHANGE_CHILD_CHAIR_OPTION,
  CHANGE_WHEEL_OPTION
} from "./actions";

const defaultState = {
  selectedColor: "",
  startDate: null,
  endDate: null,
  rate: [],
  selectedRate: "",
  isFullTank: false,
  isNeedChildChair: false,
  isRightWheel: false,
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
    case CHANGE_TANK_OPTION:
      return { ...state, isFullTank: action.payload };
    case CHANGE_CHILD_CHAIR_OPTION:
      return { ...state, isNeedChildChair: action.payload };
    case CHANGE_WHEEL_OPTION:
      return { ...state, isRightWheel: action.payload };

    default:
      return state;
  }
};
