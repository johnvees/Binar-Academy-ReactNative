import {combineReducers} from 'redux';
import {movieReducer} from '../movieList/reducer';
import {homeReducer} from '../screens/Home/redux/reducer';
import {loginReducer} from '../screens/Login/redux/reducer';
import {registerReducer} from '../screens/Register/redux/reducer';

export const allReducers = combineReducers({
  movie: movieReducer,
  register: registerReducer,
  login: loginReducer,
  home: homeReducer,
});
