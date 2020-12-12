import { combineReducers } from '@reduxjs/toolkit';
import dishdata from './dishDetail';
import hotel from './hotelDetail';
import cartdata from './cartDetail';
export const reducer = combineReducers({ dishdata, hotel, cartdata});