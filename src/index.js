import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Forms from './components/Forms';



const reducers = { form: formReducer };
const reducer = combineReducers(reducers, { data: {} });
const store = createStore(reducer);


ReactDOM.render(
    <Provider store={store}>
        <Forms />
    </Provider>,
        document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();





