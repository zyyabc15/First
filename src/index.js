import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers/reducer';
import Main from './components/main';


const store = createStore(reducer, applyMiddleware(thunk));
const root = document.querySelector('#root');


ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    root
);