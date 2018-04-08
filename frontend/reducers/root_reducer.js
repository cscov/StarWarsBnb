import { combineReducers } from 'redux';
import SessionsReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import UIReducer from './ui/ui_reducer';

export default combineReducers({
  session: SessionsReducer,
  errors: ErrorsReducer,
  ui: UIReducer,
});
