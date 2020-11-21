import { apiDetails } from '../../utils/fetchAPI';

export const getCad = (data) => {
    return {
      type: "SHOW_DISH",
      value: data,
    };
  };

  export const createCad = (data) => {
    return {
      type: "CREATE_DISH",
      value: data,
    };
  };
  
  // action creator

  export const getCadData = () => {
    return async (dispatch) => {
      let data = await apiDetails.dishes.get;
      dispatch(getCad(data));
    };
  };
  export const createCadData = (data) => {
    return async (dispatch) => {
      
      dispatch(createCad(data));
    };
  };
  