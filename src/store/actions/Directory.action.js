import ACTIONS from '../actionTypes';

export const deleteDirectoryAction = id => ({
  type: ACTIONS.SUB_MENU.DELETE,
  data: id,
});

export const setCurrentDirectoryAction = (id, name, data) => {
  const payload = { id, name, data };

  return {
    type: ACTIONS.PATH.SET_PATH_DETAILS,
    data: payload,
  };
};
