import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Layout from '../components/Layout.js';

const App = () => {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  )
}

export default App;
