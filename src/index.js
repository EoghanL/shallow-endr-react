import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import App from './App';
import User from './components/users'
import configureStore from './stores/configureStore'
import './index.css';


// CREATE THE STORE
export const store = configureStore({user_id: null, jwt: null, logged_in: false})


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <Route path='/users/:id' component={User} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
