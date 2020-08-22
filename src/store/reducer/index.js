const initialState = {
  dishdata:[
    {
      hotelid:'',
      dishid:1,
      dishname:'Aloo Burger',
      image:'',
      category:"Snacks",
      type:"Veg",
      rating:3,
      price:50,
    }
  ]
  };

  function cadReducer(state = initialState, action) {
    // const newState = { ...state }
    switch (action.type) {
      case "CREATE_CARD":
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
      case "ADD_TO_CART":
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