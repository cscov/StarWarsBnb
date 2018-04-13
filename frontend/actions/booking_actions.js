import * as APIBookingUtil from '../util/booking_api_util';
import { openTripsModal } from './modal_actions';

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';

const receiveBookings = bookings => ({
  type: RECEIVE_BOOKINGS,
  bookings
});

export const fetchBookings = (id) => dispatch => {
  dispatch(openTripsModal());
  return APIBookingUtil.fetchTrips(id).then( bookings => { dispatch(receiveBookings(bookings));
    return bookings;
  });
};
