import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const login = user => dispatch => (
  SessionAPIUtil.login(user).then(currentUser => {
    dispatch(receiveCurrentUser(currentUser)); dispatch(clearErrors());},
  err => dispatch(receiveErrors(err.responseJSON)))
);

export const logout = () => dispatch => (
  SessionAPIUtil.logout().then( () => dispatch(receiveCurrentUser(null)))
);

export const signup = user => dispatch => (
  SessionAPIUtil.signup(user).then(currentUser => (
    dispatch(receiveCurrentUser(currentUser)), dispatch(clearErrors())),
  err => dispatch(receiveErrors(err.responseJSON)))
);

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const demoLogin = user => dispatch => (
  SessionAPIUtil.demoLogin(user).then( currentUser =>
    dispatch(receiveCurrentUser(currentUser)))
);
