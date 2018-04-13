import { RECEIVE_BOOKINGS } from '../../actions/booking_actions';
import merge from 'lodash/merge';

const BookingReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOKINGS:
      return action.bookings;
    default:
      return state;
  }
};
