export const GET_SELECTED_COLOR = "GET_SELECTED_COLOR";
export const GET_START_DATE = "GET_START_DATE";
export const GET_END_DATE = "GET_END_DATE";
export const GET_RATE = "GET_RATE";
export const GET_SELECTED_RATE = "GET_SELECTED_RATE";
export const GET_ADD_OPTIONS = "GET_ADD_OPTIONS";

export const setSelectedColor = payload => ({
  type: GET_SELECTED_COLOR,
  payload
});

export const setStartDate = payload => ({
  type: GET_START_DATE,
  payload
});

export const setEndDate = payload => ({
  type: GET_END_DATE,
  payload
});

export const setRate = payload => ({
  type: GET_RATE,
  payload
});

export const setSelectedRate = payload => ({
  type: GET_SELECTED_RATE,
  payload
});

export const setFullTank = payload => ({
  type: GET_ADD_OPTIONS,
  payload
});



