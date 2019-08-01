import ACTIONS from '../actionTypes';

export const deleteDirectoryAction = id => ({
  type: ACTIONS.SUB_MENU.DELETE,
  data: id,
});

export const setCurrentDirectoryAction = payload => ({
  type: ACTIONS.PATH.SET_PATH_DETAILS,
  data: payload,
});
