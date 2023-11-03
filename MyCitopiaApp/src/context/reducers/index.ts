import {combineReducers} from 'redux';
import userReducer from './userReducer';

const myReducer = combineReducers({
  user: userReducer,
});

export default myReducer;
