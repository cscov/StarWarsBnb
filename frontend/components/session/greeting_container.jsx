import React from 'react';
import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout, demoLogin } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  demoLogin: user => dispatch(demoLogin(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
