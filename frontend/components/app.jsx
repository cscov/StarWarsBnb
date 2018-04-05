import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import GreetingContainer from './session/greeting_container';

const App = () => (
  <div>
    <header>
      <h1>Welcome to StarWarsBnb</h1>
      <GreetingContainer />
    </header>
  </div>
);

export default App;
