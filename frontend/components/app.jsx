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
  <div>
    <nav>
      <span className="theme-pink fa-2x">
        <FontAwesomeIcon icon={["fab", "rebel"]} />
      </span>
      <div className="search">
        <FontAwesomeIcon icon={["fas", "search"]} />
        <input type="text" placeholder="Try 'Tatooine'" />
      </div>
      <GreetingContainer />
    </nav>

    <AuthRoute path='/signup' component={SessionFormContainer} />
    <AuthRoute path='/login' component={SessionFormContainer} />
  </div>
);

export default App;
