import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import combinedReducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

let createStoreEnhancers;
if (process.env.NODE_ENV === 'production') {
    createStoreEnhancers = applyMiddleware(thunk);
}
else {
    createStoreEnhancers = compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}
let store = createStore(combinedReducers, createStoreEnhancers);

let unsubscribe = store.subscribe(() => {
  console.log("state updated", store.getState());
});



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
