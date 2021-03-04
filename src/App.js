import React from 'react';
import AppWrapper from './AppWrapper';
import store from './store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  )
}

export default App
