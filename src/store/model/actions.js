export const GET_CAR_LIST = "GET_CAR_LIST";
export const GET_CAR_LIST_BY_CATEGORY = "GET_CAR_LIST_BY_CATEGORY";
export const GET_CATEGORY_LIST = "GET_CATEGORY_LIST";
export const GET_SELECTED_CATEGORY = "GET_SELECTED_CATEGORY";
export const GET_SELECTED_CAR = "GET_SELECTED_CAR";
export const SET_ACTIVE_CARD = "SET_ACTIVE_CARD";

export const setCarList = (payload) => ({
  type: GET_CAR_LIST,
  payload,
});

export const setCarListByCategory = (payload) => ({
  type: GET_CAR_LIST_BY_CATEGORY,
  payload,
});

export const setCategoryList = (payload) => ({
  type: GET_CATEGORY_LIST,
  payload,
});

export const setSelectedCategory = (payload) => ({
  type: GET_SELECTED_CATEGORY,
  payload,
});

export const setSelectedCar = (payload) => ({
  type: GET_SELECTED_CAR,
  payload,
});

export const setActiveCard = (payload) => ({
  type: SET_ACTIVE_CARD,
  payload,
});
