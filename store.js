import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './src/reducers';

const initialState = {};

export const initializeStore = () =>
    createStore(
        rootReducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(thunk),
        ));