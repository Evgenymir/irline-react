import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { firstInitApp } from './actions/index';
import rootReducers from './reducers';
import App from './App.jsx';

// eslint-disable-next-line no-underscore-dangle
const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const store = createStore(
    rootReducers,
    compose(
        applyMiddleware(thunk),
        reduxDevtools && reduxDevtools(),
    ),
);

store.dispatch(firstInitApp());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('react-root'),
);
