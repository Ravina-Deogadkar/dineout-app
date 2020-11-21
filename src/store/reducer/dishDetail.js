const initialState = [
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
    ];
  
function dishdata(state = initialState, action) {
      // const newState = { ...state }
      switch (action.type) {
        case "CREATE_DISH":
          // let newAds;
          if (action.value) {
            return action.value;
          } 
            return state;
        case "SHOW_DISH":
          if (action.value) {
            return action.value;
          } 
            return state;
        default:
          break;
      }
      // if (action.type === CREATE_ADS) {
      //     state.adsDetails.push(action.value);
      // }
      return state;
    }
    
export default dishdata;