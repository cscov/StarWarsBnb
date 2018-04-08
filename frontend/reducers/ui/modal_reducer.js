import { TOGGLE_MODAL } from '../../actions/modal_actions';

const ModalReducer = (state = false, action) => {
  Object.freeze(state);
  switch (action.type) {
    case TOGGLE_MODAL:
      return !state;
    default:
      return state;
  }
};

export default ModalReducer;
