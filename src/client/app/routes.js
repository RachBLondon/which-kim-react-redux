import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Index from './components/index';
import Game from './containers/game';

export default(
  <Route path="/" component={App} >
    <IndexRoute component={Index} />
    <Route path="play" component={Game} />
  </Route>
);
