import { connect } from 'react-redux';
import React from 'react';
import SessionForm from './session_form';
import {login, clearErrors } from '../../actions/session_actions';
import { toggleModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  const errors = state.errors.sessionErrors;
  const loggedIn = Boolean(state.session.currentUser);
  let modalOpen = state.ui.modal;
  modalOpen = !modalOpen;
  return { errors, loggedIn, modalOpen };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  return { processForm: user => dispatch(login(user)),
           clearErrors: () => dispatch(clearErrors()),
           toggleModal: () => dispatch(toggleModal()),
           formType };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
