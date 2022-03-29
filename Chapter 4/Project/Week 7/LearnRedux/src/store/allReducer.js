import {combineReducers} from 'redux';
import {profileReducer} from '../screens/Profile/redux/reducer';
import {movieReducer} from '../reducer/movieReducer';

export const allReducers = combineReducers({
  profile: profileReducer,
  movie: movieReducer,
});
