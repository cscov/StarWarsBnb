import * as APIBookingUtil from '../util/booking_api_util';

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';

const receiveBookings = bookings => ({
  type: RECEIVE_BOOKINGS,
  bookings
});

const receiveBooking = booking => ({
  type: RECEIVE_BOOKING,
  booking
});

export const fetchBookings = (id) => dispatch => (
  APIBookingUtil.fetchTrips(id).then( bookings =>
    dispatch(receiveBookings(bookings)))
);


export const fetchBooking = (userId, tripId) => dispatch => (
  APIBookingUtil.fetchTrip(userId, tripId).then( booking =>
    dispatch(receiveBooking(booking)))
);
