export const GET_CITIES = 'GET_CITIES';
export const SET_CITY = 'SET_CITY';
export const GET_POINTS = 'GET_POINTS';
export const SET_POINTS_FOR_SELECTED_CITY = 'SET_POINTS_FOR_SELECTED_CITY';

export const setCities = (payload) => ({
  type: GET_CITIES,
  payload,
});

export const setCity = (payload) => ({
  type: SET_CITY,
  payload,
});
export const setPoints = (payload) => ({
  type: GET_POINTS,
  payload,
});

export const setPointsForSelectedCity = (payload) => ({
  type: SET_POINTS_FOR_SELECTED_CITY,
  payload,
});


