import React from 'react';
import { connect } from 'react-redux';
import BookingShow from './booking_show';
import { fetchBooking } from '../../actions/booking_actions';

const mapStateToProps = (state, ownProps) => ({
  trip: state.entities.bookings[ownProps.match.params.tripId]
});

const mapDispatchToProps = dispatch => ({
  fetchBooking: (userId, tripId) => dispatch(fetchBooking(userId, tripId))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingShow);
