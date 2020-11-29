const initialState = {
		orderid: '',
		hotelid: 0,
		dishes:[],
		offerid:0,
		offerval:0,
		paymentMode:'',
		price: 50,
}

function cartdata(state = initialState, action) {
	// const newState = { ...state }
	switch (action.type) {

		case "ADD_TO_CART":
			if (action.value) {
				return {
					...state,
					...action.value,
				};
			} 
			return state;
		case "UPDATE_OFFER":
			if (action.value) {
				return {
					...state,
					...action.value,
				};
			}
			return state;
		case "UPDATE_PAYMENT_MODE":
			if (action.value) {
				return {
					...state,
					...action.value,
				};
			}
			return state;
		default:
			break;
	}
	return state;
}

export default cartdata;