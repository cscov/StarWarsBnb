import { combineReducers } from 'redux';
import ModalReducer from './ModalReducer';

export default combineReducers({
  modal: ModalReducer
});
