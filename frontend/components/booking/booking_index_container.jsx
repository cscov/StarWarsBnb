import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchBookings } from '../../actions/booking_actions';
import BookingIndex from './booking_index';

const mapStateToProps = state => ({
  trips: state.entities.bookings,
  
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchBookings: bookings => dispatch(fetchBookings(bookings))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookingIndex));
