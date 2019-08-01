import ACTIONS from '../actionTypes';

import { Directory as initialState } from '../meta/initialState/index';

const Directory = (state = initialState, action = {}) => {
  switch (action.type) {
    case ACTIONS.SUB_MENU.CLEAR_INFO: {
      return { ...state };
    }

    case ACTIONS.SUB_MENU.DELETE: {
      const updatedRoot = [...state.root];
      return { ...state, root: updatedRoot };
    }

    default: {
      return state;
    }
  }
};

export default Directory;
