import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './src/reducers';

export const initializeStore = (initialState = {}) =>
    createStore(
        rootReducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(thunk),
        ));