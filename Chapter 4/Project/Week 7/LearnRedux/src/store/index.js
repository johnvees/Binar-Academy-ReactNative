import {createStore} from 'redux';
import {allReducers} from './allReducer';

export const store = createStore(allReducers);
