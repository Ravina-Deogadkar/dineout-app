import { apiDetails} from '../../utils/fetchAPI';

export const getHotel = (data) => {
    return {
      type: "SHOW_HOTEL",
      value: data,
    };
  };

export const setHotel = (data) => {
  return {
    type: "SET_HOTEL",
    value: data,
  };
};
// action creator

export const getHotelData = () => {
    return async (dispatch) => {
      let data = await apiDetails.hotels.get;
      dispatch(getHotel(data));
    };
  };


export const setHotelData = (hoteldata) => {
  return async (dispatch) => {
    dispatch(setHotel(hoteldata));
  };
};
