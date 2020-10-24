const initialState = {
    dishdata:[
      {
        hotelid:'',
        hotelname:'Abc',
        address:'abc,z,pp',
        state:'',
        country:'',
        type:"Veg",
        rating:3,
        avgPrice:500,
      }
    ]
    };

    function hotelReducer(state = initialState, action) {
        // const newState = { ...state }
        switch (action.type) {
            case "SHOW_DISH":
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
                return state;
        }
    }
    
    export default hotelReducer;