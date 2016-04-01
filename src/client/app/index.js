import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import promise from 'redux-promise';

import routes from './routes';

import App from './components/app';
import reducers from './reducers';


import 'babel-polyfill'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <div>
          <Router history={browserHistory} routes={routes} />
        </div>
    </Provider>
  , document.querySelector('.container'));
