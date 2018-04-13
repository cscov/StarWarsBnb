import React from 'react';
import { connect } from 'react-redux';
import SessionButtons from './session_buttons';
import { logout, demoLogin } from '../../actions/session_actions';
import { toggleModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  modalOpen: state.ui.modal
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  demoLogin: user => dispatch(demoLogin(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionButtons);
