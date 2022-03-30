import {combineReducers} from 'redux';
import {homeReducer} from '../screens/Home/redux/reducer';
import {loginReducer} from '../screens/Login/redux/reducer';
import {registerReducer} from '../screens/Register/redux/reducer';

export const allReducers = combineReducers({
  register: registerReducer,
  login: loginReducer,
  home: homeReducer,
});
