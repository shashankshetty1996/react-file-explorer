import CONSTANTS from '../../Constants';

export const initialState = {
  tabState: CONSTANTS.CONTENT_TYPE.TYPE.FILE,
  input: {
    name: '',
    creator: '',
    size: '',
    date: '',
  },
};

export const ContentReducer = (state, action) => {
  const {
    CONTENT_TYPE: {
      ACTION: { SET_TYPE, SET_INPUT, CLEAR_INPUT },
    },
  } = CONSTANTS;

  switch (action.type) {
    case SET_TYPE: {
      const tab = action.payload;
      return { ...state, tabState: tab };
    }

    case SET_INPUT: {
      const { name, value } = action.payload;
      return { ...state, input: { ...state.input, [name]: value } };
    }

    case CLEAR_INPUT: {
      return { ...state, input: initialState.input };
    }

    default: {
      return state;
    }
  }
};
