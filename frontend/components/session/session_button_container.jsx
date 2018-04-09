import React from 'react';
import { connect } from 'react-redux';
import SessionButtons from './session_buttons';
import { logout, demoLogin } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  demoLogin: user => dispatch(demoLogin(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionButtons);
