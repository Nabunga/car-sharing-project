import { GET_ORDER_TOTAL, GET_READABLE_DATE_APPROVING } from "./actions";

const defaultState = {
  orderTotal: {},
  readableDate: "",
};

export const orderTotalReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_ORDER_TOTAL:
      return { ...state, orderTotal: action.payload };
    case GET_READABLE_DATE_APPROVING:
      return { ...state, readableDate: action.payload };

    default:
      return state;
  }
};
