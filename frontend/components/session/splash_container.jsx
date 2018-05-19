import React from 'react';
import { connect } from 'react-redux';
import { demoLogin } from '../../actions/session_actions';
import Splash from './splash';

const mapDispatchToProps = dispatch => ({
  demoLogin: user => dispatch(demoLogin(user)),
});

export default connect(null, mapDispatchToProps)(Splash);
