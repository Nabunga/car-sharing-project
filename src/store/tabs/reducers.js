import { SET_ACTIVE_INDEX } from "./actions";

const defaultState = {
  firstTabIndex: 1,
  secondTabIndex: 2,
  thirdTabIndex: 3,
  fourthTabIndex: 4,
  activeIndex: 1,
};

export const tabsReducer = (state = defaultState, action) => {
  switch(action.type) {
    case SET_ACTIVE_INDEX:
      return { ...state, activeIndex: action.payload }
    default:
      return state
  }
}