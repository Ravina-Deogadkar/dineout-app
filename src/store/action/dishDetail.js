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
  export const addCart = (data) => {
    return {
      type: "ADD_TO_CART",
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
  export const addToCart = (data) => {
    return async (dispatch) => {
      
      dispatch(addCart(data));
    };
  };