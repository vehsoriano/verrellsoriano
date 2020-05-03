import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import Home from './containers/Home';
import NoRouteMatch from './containers/404';

import './stylesheets/main.scss';

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div className="App">

          <Switch>
            <Route path="/" exact component={Home} />
            <Route component={NoRouteMatch} />
          </Switch>

        </div>
      </HashRouter>
    );
  }
}

export default hot(module)(App);
