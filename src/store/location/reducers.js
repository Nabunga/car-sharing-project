import {
  GET_CITIES,
  GET_POINTS,
  SET_CITY,
  SET_POINTS_FOR_SELECTED_CITY,
} from "./actions";

const defaultState = {
  cities: [],
  points: [],
  selectedCity: null,
  pointsForSelectedCity: null,
};

export const locationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_CITIES:
      return { ...state, cities: action.payload };
    case SET_CITY:
      return { ...state, selectedCity: action.payload };
    case GET_POINTS:
      return { ...state, points: action.payload };
    case SET_POINTS_FOR_SELECTED_CITY:
      return { ...state, pointsForSelectedCity: action.payload };

    default:
      return state;
  }
};
