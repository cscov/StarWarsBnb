import { combineReducers } from 'redux';
import SessionsReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';

export default combineReducers({
  session: SessionsReducer,
  errors: ErrorsReducer
});
