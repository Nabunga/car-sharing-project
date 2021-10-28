import {
  GET_SELECTED_COLOR,
  GET_START_DATE,
  GET_END_DATE,
  GET_RATE,
  GET_SELECTED_RATE,
  CHANGE_TANK_OPTION,
  CHANGE_CHILD_CHAIR_OPTION,
  CHANGE_WHEEL_OPTION,
  SET_RENT_DURATION,
  SET_READABLE_START_DATE,
} from "./actions";

const defaultState = {
  selectedColor: null,
  startDate: null,
  readableStartDate: null,
  endDate: null,
  rentDuration: null,
  rate: [],
  selectedRate: null,
  isFullTank: false,
  isNeedChildChair: false,
  isRightWheel: false,
  orderFromServer: {},
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
    case SET_RENT_DURATION:
      return { ...state, rentDuration: action.payload };
    case SET_READABLE_START_DATE:
      return { ...state, readableStartDate: action.payload };
    case "GET_ORDER":
      return { ...state, orderFromServer: action.payload };

    default:
      return state;
  }
};
