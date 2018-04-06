import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const greet = (currentUser, logout) => (
  <div>
    <span>Hello, {currentUser.email_address}</span>
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

const Greeting = ({currentUser, logout, demoLogin}) => {
  return currentUser ? greet(currentUser, logout) : sessionLinks(demoLogin);
};

export default Greeting;
