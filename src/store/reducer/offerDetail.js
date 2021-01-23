const initialState = [
	{
		offerid: 1,
		title: '',
		desc: '',
		code: '',
		startDate: '',
		endDate: '',

	}
];

function offerdata(state = initialState, action) {
	// const newState = { ...state }
	switch (action.type) {
		case "CREATE_OFFER":
			// let newAds;
			if (action.value) {
				return action.value;
			}
			return state;
		case "SHOW_OFFER":
			if (action.value) {
				return action.value;
			}
			return state;
		default:
			break;
	}
	
	return state;
}

export default offerdata;