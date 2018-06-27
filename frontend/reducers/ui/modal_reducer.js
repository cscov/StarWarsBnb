import { OPEN_TRIPS_MODAL } from '../../actions/modal_actions';
import { CLOSE_TRIPS_MODAL } from '../../actions/modal_actions';
import merge from 'lodash/merge';

const initialState = {
  tripModalOpen: false,
};

const ModalReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_TRIPS_MODAL:
      return merge({}, state, {tripModalOpen: true});
    case CLOSE_TRIPS_MODAL:
      return merge({}, state, {tripModalOpen: false });
    default:
      return state;
  }
};

export default ModalReducer;
