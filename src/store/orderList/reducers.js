const defaultState = {
  orderList: {
    point: null,
    model: null,
    color: null,
    rentDuration: null,
    selectedRate: null,
    addOptions: {
      isFullTank: false,
      isChildChairNees: false,
      isRightWheel: false
    }    
  }
}

export const orderListReducer = (state = defaultState, action) => {
  switch(action.type) {
    default:
      return state
  }
}