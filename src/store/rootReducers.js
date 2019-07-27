import { combineReducers } from 'redux';

import directory from './reducers/Directory.reducer';

const rootReducer = combineReducers({
  directory,
});

export default rootReducer;
