import { apiDetails} from '../../utils/fetchAPI';

export const getHotel = (data) => {
    return {
      type: "SHOW_HOTEL",
      value: data,
    };
  };
// action creator

export const getHotelData = () => {
    return async (dispatch) => {
      let data = await apiDetails.hotels.get;
      console.log('data',data);
      dispatch(getHotel(data));
    };
  };
