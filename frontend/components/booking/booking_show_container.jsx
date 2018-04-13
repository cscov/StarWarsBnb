import React from 'react';
import { connect } from 'react-redux';
import BookingShow from './booking_show';
import { fetchBooking } from '../../actions/booking_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  trip: state.entities.bookings[ownProps.match.params.tripId],
  userId: state.session.currentUser.id
});

const mapDispatchToProps = dispatch => ({
  fetchBooking: (userId, tripId) => dispatch(fetchBooking(userId, tripId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookingShow));
