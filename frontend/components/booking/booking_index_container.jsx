import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchBookings } from '../../actions/booking_actions';
import TripsButton from './trips_button';

const mapStateToProps = state => ({
  trips: Object.values(state.entities.bookings),
  modalOpen: state.ui.modal.tripModal,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchBookings: (id) => dispatch(fetchBookings(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TripsButton));
