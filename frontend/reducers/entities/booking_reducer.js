import { RECEIVE_BOOKINGS, RECEIVE_BOOKING } from '../../actions/booking_actions';
import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import merge from 'lodash/merge';

const BookingReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOKINGS:
      return action.bookings;
    case RECEIVE_BOOKING:
      let trip = action.booking;
      return merge({}, state, {[trip.id]: trip});
    default:
      return state;
  }
};

export default BookingReducer;
