const Constants = {
  SUB_MENU_OPTIONS: {
    OPEN: 'Open',
    GET_INFO: 'Get info',
    DELETE: 'Delete',
  },
  CONTENT_TYPE: {
    TYPE: {
      FILE: 'FILE',
      FOLDER: 'FOLDER',
    },
    ACTION: {
      SET_TYPE: 'SET_TYPE',
      SET_INPUT: 'SET_INPUT',
      CLEAR_INPUT: 'CLEAR_INPUT',
    },
  },
  WARNING_MODAL: {
    BUTTON: {
      CLOSE: 'Close',
      CONFIRM: 'Confirm',
    },
    ALERT: {
      FILE_EXIST:
        'File with this name already exist in your current directory, Please create another file with different name',
      FILE_EXTENSION_MISSING: 'File cannot be created without extension',
    },
  },
};

export default Constants;
