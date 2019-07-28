import ACTIONS from '../actionTypes';

export const getInfoAction = id => {
  return {
    type: ACTIONS.SUB_MENU.GET_INFO,
    data: id,
  };
};

export const deleteDirectoryAction = id => {
  return {
    type: ACTIONS.SUB_MENU.DELETE,
    data: id,
  };
};
