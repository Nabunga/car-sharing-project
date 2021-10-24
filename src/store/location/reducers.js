import { GET_CITIES, GET_POINTS, SET_CITY, SET_POINT } from "./actions";

const defaultState = {
  cities: [],
  selectedCity: null,
  points: [],
  point: "",
};

export const locationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_CITIES:
      return { ...state, cities: action.payload };
    case SET_CITY:
      return { ...state, selectedCity: action.payload };
    case GET_POINTS:
      return { ...state, points: action.payload };
    case SET_POINT:
      return { ...state, point: action.payload };

    default:
      return state;
  }
};
