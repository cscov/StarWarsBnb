import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import GreetingContainer from './session/greeting_container';
import SessionFormContainer from './session/session_form_container';
import { AuthRoute } from '../util/route_util';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import regular from '@fortawesome/fontawesome-free-regular';
import solid from '@fortawesome/fontawesome-free-solid';
import faRebel from '@fortawesome/fontawesome-free-brands/faRebel';
fontawesome.library.add(brands, regular, solid, faRebel);

const App = () => (
  <div className="app">
    <nav>
      <div className="left-nav">
        <span id="logo" className="theme-pink fa-2x">
          <a href="/"><FontAwesomeIcon icon={["fab", "rebel"]} /></a>
        </span>
        <div className="search theme-light-gray">
          <span className="fa-1.5x">
            <FontAwesomeIcon icon={["fas", "search"]} />
          </span>
          <input type="text" placeholder="Try 'Tatooine'" />
        </div>
      </div>
      <div className="right-nav">
        <GreetingContainer />
      </div>
    </nav>

    <AuthRoute path='/signup' component={SessionFormContainer} />
    <AuthRoute path='/login' component={SessionFormContainer} />
  </div>
);

export default App;
