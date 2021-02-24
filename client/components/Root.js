import React from 'react';
import store from '../store';

import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

export default function Root() {
  return (
    <Provider store={store}>
      <Router>
        <div>Hello from Root.js</div>
      </Router>
    </Provider>
  );
}
