import React from 'react';
import { connect } from 'react-redux';
import { fetchTripsModal, closeTripsModal } from '../../actions/modal_actions';
import TripsModal from './trips_modal';

const mapStateToProps = state => ({
  modalOpen: state.ui.modal.tripModalOpen
});

const mapDispatchToProps = dispatch => ({
  fetchModal: () => dispatch(fetchTripsModal()),
  closeModal: () => dispatch(closeTripsModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripsModal);
