import {
  GET_ACTIVE_CAR_INFO,
  GET_CAR_LIST,
  GET_CAR_LIST_BY_CATEGORY,
  GET_CATEGORY_LIST,
  GET_SELECTED_CATEGORY,
  GET_ACTIVE_CARD,
} from "./actions";

const defaultState = {
  carList: [],
  carListByCategory: [],
  categoryList: [],
  selectedCategory: "Все",
  activeCard: null,
  activeCarInfo: {},
};

export const carListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_CAR_LIST:
      return { ...state, carList: action.payload };
    case GET_CAR_LIST_BY_CATEGORY:
      return { ...state, carListByCategory: action.payload };
    case GET_ACTIVE_CAR_INFO:
      return { ...state, activeCarInfo: action.payload };
    case GET_CATEGORY_LIST:
      return { ...state, categoryList: action.payload };
    case GET_SELECTED_CATEGORY:
      return { ...state, selectedCategory: action.payload };
    case GET_ACTIVE_CARD:
      return { ...state, activeCard: action.payload };
    default:
      return state;
  }
};
