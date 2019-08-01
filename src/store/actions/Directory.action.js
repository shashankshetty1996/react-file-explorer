import ACTIONS from '../actionTypes';

export const clearInfoAction = () => {
  return {
    type: ACTIONS.SUB_MENU.CLEAR_INFO,
  };
};

export const deleteDirectoryAction = id => {
  return {
    type: ACTIONS.SUB_MENU.DELETE,
    data: id,
  };
};
