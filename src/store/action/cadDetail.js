import FetchAPI from "../../fetch";
import config from "../../config";
import Axios from "axios";

export const getAds = (data) => {
    return {
      type: "SHOW_CARD",
      value: data,
    };
  };
  // action creator

  export const getCadData = (data) => {
    return async (dispatch) => {
      
      dispatch(getAds(data));
    };
  };