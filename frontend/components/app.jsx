import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import SessionButtonsContainer from './session/session_button_container';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import regular from '@fortawesome/fontawesome-free-regular';
import solid from '@fortawesome/fontawesome-free-solid';
import faRebel from '@fortawesome/fontawesome-free-brands/faRebel';
import faEnvelope from '@fortawesome/fontawesome-free-regular/faEnvelope';
import faUser from '@fortawesome/fontawesome-free-regular/faUser';
import faLock from '@fortawesome/fontawesome-free-solid/faLock';
import SpotsIndex from './spots/spots_index';

fontawesome.library.add(brands, regular, solid, faRebel, faEnvelope,
  faUser, faLock);

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
          <SessionButtonsContainer />
        </div>
      </nav>
      <div className="session-form">
        <Switch>
          <AuthRoute path='/signup' component={SignupFormContainer} />
          <AuthRoute path='/login' component={LoginFormContainer} />
          <Route path="/rooms" component={SpotsIndex} />
          <Route exact path='/'/>
        </Switch>
      </div>
  </div>
);

export default App;
