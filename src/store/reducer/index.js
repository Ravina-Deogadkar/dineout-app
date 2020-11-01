import { combineReducers } from '@reduxjs/toolkit';
import dishdata from './dishDetail';
import hoteldata from './hotelDetail';
export const reducer = combineReducers({ dishdata, hoteldata});