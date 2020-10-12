import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';

ReactDOM.hydrate(<Router>
  <Route path="/" component={App} />
  </Router>,
  document.getElementById('root')
);
//ReactDOM.hydrate(<App />, document.getElementById('root'));
