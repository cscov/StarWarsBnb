import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionButtonsContainer from './session/session_button_container';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import regular from '@fortawesome/fontawesome-free-regular';
import solid from '@fortawesome/fontawesome-free-solid';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faLinkedInIn from '@fortawesome/fontawesome-free-brands/faLinkedInIn';
import faRebel from '@fortawesome/fontawesome-free-brands/faRebel';
import faEnvelope from '@fortawesome/fontawesome-free-regular/faEnvelope';
import faUser from '@fortawesome/fontawesome-free-regular/faUser';
import faLock from '@fortawesome/fontawesome-free-solid/faLock';
import SpotsIndexContainer from './spots/spots_index_container';
import SpotShowContainer from './spots/spot_show_container';
import BookingShowContainer from './booking/booking_show_container';
import faStar from '@fortawesome/fontawesome-free-solid/faStar';


fontawesome.library.add(brands, regular, solid, faRebel, faEnvelope,
  faUser, faLock, faStar);

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
            <input type="text" placeholder="Try &quot;Tatooine&quot;" />
          </div>
        </div>
        <div className="right-nav">
          <SessionButtonsContainer />
        </div>
      </nav>
      <div className="content">
        <Switch>
          <AuthRoute path='/signup' component={SignupFormContainer} />
          <AuthRoute path='/login' component={LoginFormContainer} />
          <ProtectedRoute path='/rooms/:roomId' component={SpotShowContainer} />
          <ProtectedRoute path='/trips/:tripId' component={BookingShowContainer} />
          <Route path="/rooms" component={SpotsIndexContainer} />
          <Redirect to='/rooms'/>
        </Switch>
        <address>
          <span id="github" className="theme-pink">
            <a href="https://github.com/cscov/StarWarsBnb"><FontAwesomeIcon icon={["fab", "github"]} /></a>
          </span>
          <span id="linkedin" className="theme-pink">
            <a href="https://www.linkedin.com/in/carolynscoville/"><FontAwesomeIcon icon={["fab", "linkedin-in"]} /></a>
          </span>
        </address>
      </div>
  </div>
);

export default App;
