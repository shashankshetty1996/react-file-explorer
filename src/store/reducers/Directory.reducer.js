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

    case ACTIONS.PATH.SET_PATH_DETAILS: {
      const updatedCurrentDirectory = { ...action.data };
      return { ...state, currentDirectory: updatedCurrentDirectory };
    }

    default: {
      return state;
    }
  }
};

export default Directory;
