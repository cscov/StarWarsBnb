import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const newSession = (currentUser, logout, openTripsModal) => (
  <div className="new-session">
    <button className="session-links" id="trips" onClick={openTripsModal}>Trips</button>
    <button onClick={logout}>Log Out</button>
  </div>
);

const sessionLinks = (demoLogin) => (
  <div className="session-links">
    <div><Link to='/signup'>Sign Up</Link></div>
    <div><Link to='/login'>Log In</Link></div>
    <button  id="demo" onClick={demoLogin}>Demo Login</button>
  </div>
);

const SessionButtons = ({currentUser, logout, demoLogin}) => {
  return currentUser ? newSession(currentUser, logout)
                      : sessionLinks(demoLogin);
};

export default SessionButtons;
