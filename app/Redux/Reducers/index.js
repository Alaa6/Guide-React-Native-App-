import {combineReducers}from 'redux';
import authReducer from './authReducer';


export default combineReducers({
   // key:value

   auth:authReducer ,
}); 

