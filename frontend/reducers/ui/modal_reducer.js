import { OPEN_TRIPS_MODAL } from '../../actions/modal_actions';
import { RECEIVE_BOOKINGS } from '../../actions/booking_actions';
import merge from 'lodash/merge';

const initialState = {
  tripModal: false,
  amenityModal: false
};

const ModalReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_TRIPS_MODAL:
    case RECEIVE_BOOKINGS:
      return merge({}, state, {tripModal: true });
    default:
      return state;
  }
};

export default ModalReducer;
