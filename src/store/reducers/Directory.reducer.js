import ACTIONS from '../actionTypes';

import { Directory as initialState } from '../meta/initialState';

import { FileClass, DirectoryClass } from '../meta/objectClass';

const getUpdatedCreateRoot = (dir, path, content) => {
  const curDir = path.shift();
  if (curDir === undefined) {
    return [...dir, content];
  }
  return dir.map(item => {
    if (item.name === curDir) {
      return { ...item, children: getUpdatedCreateRoot(item.children, path, content) };
    }
    return item;
  });
};

const addNode = (root, currentDirectory, content) => {
  const { path, data } = currentDirectory;
  const { isDirectory } = content;
  let updatedRoot;

  const node = isDirectory ? new DirectoryClass(content) : new FileClass(content);

  const updatedDataSet = [...data, node];

  if (path.length) {
    const rootPath = [...path];
    updatedRoot = getUpdatedCreateRoot(root, rootPath, node);
  } else {
    updatedRoot = [...updatedDataSet];
  }

  const updatedCurrentDirectory = {
    ...currentDirectory,
    data: updatedDataSet,
  };

  return { updatedRoot, updatedCurrentDirectory };
};

const getUpdatedDeleteRoot = (dir, path, nodeID) => {
  const curDir = path.shift();
  return dir
    .filter(el => el.id !== nodeID)
    .map(item => {
      if (item.name === curDir) {
        return { ...item, children: getUpdatedDeleteRoot(item.children, path, nodeID) };
      }
      return item;
    });
};

const deleteNode = (root, currentDirectory, nodeID) => {
  const { path, data } = currentDirectory;
  let updatedRoot;

  const updatedDataSet = data.filter(item => item.id !== nodeID);

  if (path.length) {
    const rootPath = [...path];
    updatedRoot = getUpdatedDeleteRoot(root, rootPath, nodeID);
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

    case ACTIONS.CONTENT.CREATE: {
      const { root, currentDirectory } = state;

      const { data } = action;

      const { updatedRoot, updatedCurrentDirectory } = addNode(root, currentDirectory, data);

      return { ...state, root: updatedRoot, currentDirectory: updatedCurrentDirectory };
      // return state;
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
