import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { firstInitApp } from './actions/index';
import rootReducers from './reducers';
import App from './App.jsx';

const composeEnhancers = typeof window === 'object'
&& window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
);

const store = createStore(
    rootReducers,
    enhancer,
);

store.dispatch(firstInitApp());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('react-root'),
);
