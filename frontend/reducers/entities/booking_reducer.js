import { RECEIVE_BOOKINGS } from '../../actions/booking_actions';
import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import merge from 'lodash/merge';

const BookingReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    console.log(action.currentUser);
      if (action.currentUser) {
        return action.bookings;
      } else {
        return state;
      }
    case RECEIVE_BOOKINGS:
      return action.bookings;
    default:
      return state;
  }
};

export default BookingReducer;
