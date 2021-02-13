import { combineReducers } from '@reduxjs/toolkit';
import dishdata from './dishDetail';
import hotel from './hotelDetail';
import cartdata from './cartDetail';
import offerdata from './offerDetail';
export const reducer = combineReducers({ dishdata, hotel, cartdata, offerdata});