import * as APIBookingUtil from '../util/booking_api_util';

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';

const receiveBookings = bookings => ({
  type: RECEIVE_BOOKINGS,
  bookings
});

export const fetchBookings = () => dispatch => (
  APIBookingUtil.fetchBookings().then( bookings => dispatch(receiveBookings(bookings)))
);
