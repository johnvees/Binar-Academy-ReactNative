import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {allReducers} from './allReducer';

const allMiddlewares = applyMiddleware(logger);

export const store = createStore(allReducers, {}, allMiddlewares);
