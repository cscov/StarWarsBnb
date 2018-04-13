import React from 'react';
import { connect } from 'react-redux';
import SessionButtons from './session_buttons';
import { logout, demoLogin } from '../../actions/session_actions';
import { openTripsModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  modalOpen: state.ui.modal.tripModal
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  demoLogin: user => dispatch(demoLogin(user)),
  openTripsModal: () => dispatch(openTripsModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionButtons);
