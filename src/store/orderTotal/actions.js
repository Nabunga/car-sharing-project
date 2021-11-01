export const GET_ORDER_TOTAL = "GET_ORDER_TOTAL";
export const GET_READABLE_DATE_APPROVING = "GET_READABLE_DATE_APPROVING";


export const getOrderTotal = (payload) => ({
  type: GET_ORDER_TOTAL,
  payload,
});

export const getReadableDateApproving = (payload) => ({
  type: GET_READABLE_DATE_APPROVING,
  payload,
});