import { connect } from 'react-redux';
import React from 'react';
import SessionForm from './session_form';
import {login, signup, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  const errors = state.errors.sessionErrors;
  const loggedIn = Boolean(state.session.currentUser);
  return { errors, loggedIn };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  return { processForm: user => dispatch(processForm(user)),
           clearErrors: () => dispatch(clearErrors()),
           formType };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
