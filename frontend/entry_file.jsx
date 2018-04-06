import React from 'react';
import ReactDOM from 'react-dom';
import { signup, login, logout } from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser }};
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  // TESTING START
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // TESTING END

  ReactDOM.render(<Root store={store} />, rootEl);
});
