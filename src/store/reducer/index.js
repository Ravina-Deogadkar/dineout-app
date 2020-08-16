const initialState = {
    caddata:[
        {
          hotel:'',
          dishid:1,
          dishname:'',
          image:'',
          category:"",
          prize:90,
        }
      ]
  };

  function cadReducer(state = initialState, action) {
    // const newState = { ...state }
    switch (action.type) {
      case "CREATE_ADS":
        // let newAds;
        if (action.value) {
          return {
            ...state,
            ...action.value,
          };
        } else {
          return {
            ...state,
          };
        }
      case "SHOW_CARD":
        if (action.value) {
          return {
            ...state,
            ...action.value,
          };
        } else {
          return {
            ...state,
          };
        }
      case "SIGN_IN":
        if (action.value) {
          return {
            ...state,
            ...action.value,
          };
        } else {
          return {
            ...state,
          };
        }
      case "SIGN_OUT":
        if (action.value) {
          return {
            ...state,
            ...action.value,
          };
        } else {
          return {
            ...state,
          };
        }
      default:
        break;
    }
    // if (action.type === CREATE_ADS) {
    //     state.adsDetails.push(action.value);
    // }
    return state;
  }
  
  export default cadReducer;