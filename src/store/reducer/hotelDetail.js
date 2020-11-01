const initialState = [
		{
			hotelid:'H3',
			hotelname:'CSweets',
			image:'',
			category:["Desert"],
			type:["Veg"],
			address:"c",
			state:'mj',
			country:'ji',
			rating:4.5,
			avgprice:250,
		}
    ];


    function hoteldata(state = initialState, action) {
        // const newState = { ...state }
        switch (action.type) {
            case "SHOW_HOTEL":
                if (action.value) {
                  return action.value;
                } else {
                  return [
                    ...state,
                  ];
                }
            default:
                return state;
        }
    }
    
export default hoteldata;