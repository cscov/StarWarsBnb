import { connect } from 'redux';
import React from 'react';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  const errors = state.errors;
  const formType = 'Sign up';
  return { errors, formType };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: user => dispatch(ownProps.formType(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
