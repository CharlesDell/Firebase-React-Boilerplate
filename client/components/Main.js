import React from 'react';
import store from '../store';

import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

export default function Main() {
  return (
    <Provider store={store}>
      <div>Hello from Main.jsx</div>
    </Provider>
  );
}
