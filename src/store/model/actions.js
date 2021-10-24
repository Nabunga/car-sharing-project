export const GET_CAR_LIST = "GET_CAR_LIST";
export const GET_CATEGORY_LIST = "GET_CATEGORY_LIST";
export const GET_SELECTED_CATEGORY = "GET_SELECTED_CATEGORY";
export const GET_ACTIVE_CARD = "SET_ACTIVE_CARD";
export const GET_ACTIVE_CAR_INFO = "GET_ACTIVE_CAR_INFO";

export const setCarList = (payload) => ({
  type: GET_CAR_LIST,
  payload,
});

export const setActiveCarInfo = (payload) => ({
  type: GET_ACTIVE_CAR_INFO,
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

export const setActiveCard = (payload) => ({
  type: GET_ACTIVE_CARD,
  payload,
});
