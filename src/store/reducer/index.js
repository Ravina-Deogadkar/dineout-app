import { combineReducers } from '@reduxjs/toolkit';
import dishReducer from './dishDetail';
import hotelReducer from './hotelDetail';
export const reducer=combineReducers({dishReducer,hotelReducer});