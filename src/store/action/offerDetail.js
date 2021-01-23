import { apiDetails } from '../../utils/fetchAPI';

export const getOffer = (data) => {
	return {
		type: "SHOW_OFFER",
		value: data,
	};
};

export const createOffer = (data) => {
	return {
		type: "CREATE_OFFER",
		value: data,
	};
};

// action creator

export const getOfferData = () => {
	return async (dispatch) => {
		let data = await apiDetails.offers.get;
		dispatch(getOffer(data));
	};
};
export const createOfferData = (data) => {
	return async (dispatch) => {

		dispatch(createOffer(data));
	};
};
