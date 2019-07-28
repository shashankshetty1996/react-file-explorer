import ACTIONS from '../actionTypes';

import { Directory as initialState } from '../meta/initialState/index';

const getContentById = (id, data) => {
  return data.find(el => {
    if (el.is_directory && el.children.length) {
      getContentById(id, el.children);
    }
    return el.id === id;
  });
};

const Directory = (state = initialState, action = {}) => {
  switch (action.type) {
    case ACTIONS.SUB_MENU.GET_INFO: {
      const info = getContentById(action.data, state.root);
      return { ...state, info };
    }

    case ACTIONS.SUB_MENU.CLEAR_INFO: {
      return { ...state, info: null };
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
