import React from 'react';
import { Link } from 'react-router-dom';

const greet = (currentUser, logout) => (
  <div>
    <span>Hello, {currentUser.email_address}</span>
    <button onClick={logout}>Log Out</button>
  </div>
);

const sessionLinks = () => (
  <div>
    <Link to='/signup'>Sign Up</Link>
    <Link to='/login'>Log In</Link>
  </div>
);

const Greeting = ({currentUser, logout}) => {
  return currentUser ? greet(currentUser, logout) : sessionLinks();
};

export default Greeting;
