import React from 'react';
import { Link } from 'react-router-dom';

const greet = (logout) => (
  <div>
    <span>Hello, currentUser</span>
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
  return currentUser ? greet(logout) : sessionLinks();
};

export default Greeting;
