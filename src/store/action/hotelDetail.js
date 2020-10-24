export const getHotel = (data) => {
    return {
      type: "SHOW_HOTEL",
      value: data,
    };
  };
// action creator

export const getHotelData = (data) => {
    return async (dispatch) => {
      dispatch(getHotel(data));
    };
  };
