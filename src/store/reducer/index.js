import { combineReducers } from '@reduxjs/toolkit';
import dishdata from './dishDetail';
import hoteldata from './hotelDetail';
import cartdata from './cartDetail';
export const reducer = combineReducers({ dishdata, hoteldata, cartdata});