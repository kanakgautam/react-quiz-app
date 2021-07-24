import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import thunk from 'redux-thunk';
import { createStore ,applyMiddleware} from 'redux';
import allReducers from './reducers'
import { Provider } from 'react-redux'
import configure from './store.js'
import { PersistGate } from 'redux-persist/integration/react'


const { store, persistor } = configure();
ReactDOM.render(
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate> */}
      <App/>
  </Provider>
  ,
  document.getElementById('root')
);

