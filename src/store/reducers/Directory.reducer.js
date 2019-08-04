import ACTIONS from '../actionTypes';

import { Directory as initialState } from '../meta/initialState/index';

const getUpdatedRoot = (dir, path, nodeID) => {
  const curDir = path.shift();
  return dir
    .filter(el => el.id !== nodeID)
    .map(item => {
      if (item.name === curDir) {
        return { ...item, children: getUpdatedRoot(item.children, path, nodeID) };
      }
      return item;
    });
};

const deleteNode = (root, currentDirectory, nodeID) => {
  const { path, data } = currentDirectory;
  let updatedRoot;

  const updatedDataSet = data.filter(item => item.id !== nodeID);

  if (path.length) {
    updatedRoot = getUpdatedRoot(root, path, nodeID);
  } else {
    // root directory
    updatedRoot = [...updatedDataSet];
  }

  const updatedCurrentDirectory = {
    ...currentDirectory,
    data: updatedDataSet,
  };
  return { updatedRoot, updatedCurrentDirectory };
};

const Directory = (state = initialState, action = {}) => {
  switch (action.type) {
    case ACTIONS.SUB_MENU.CLEAR_INFO: {
      return { ...state };
    }

    case ACTIONS.SUB_MENU.DELETE: {
      const { root, currentDirectory } = state;
      const { data } = action;

      const { updatedRoot, updatedCurrentDirectory } = deleteNode(root, currentDirectory, data);

      return { ...state, root: updatedRoot, currentDirectory: updatedCurrentDirectory };
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
