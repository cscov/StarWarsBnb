import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import GreetingContainer from './session/greeting_container';
import SessionFormContainer from './session/session_form_container';
import { AuthRoute } from '../util/route_util';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import faRebel from '@fortawesome/fontawesome-free-brands/faRebel';
fontawesome.library.add(brands, faRebel);

const App = () => (
  <div>
    <header>
      <span className="theme-pink logo">
        <FontAwesomeIcon icon={["fab", "rebel"]} />
      </span>
      <GreetingContainer />
    </header>

    <AuthRoute path='/signup' component={SessionFormContainer} />
    <AuthRoute path='/login' component={SessionFormContainer} />
  </div>
);

export default App;
