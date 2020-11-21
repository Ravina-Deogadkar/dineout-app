export const cart_addCart = (data) => {
	return {
		type: "ADD_TO_CART",
		value: data,
	};
};

export const cart_updateCart = (data) => {
	return {
		type: "UPDATE_OFFER",
		value: data,
	};
};

export const cart_updatePaymentMode = (data) => {
	return {
		type: "UPDATE_PAYMENT_MODE",
		value: data,
	};
};

export const addToCart = (data) => {
	return async (dispatch) => {
		dispatch(cart_addCart(data));
	};
};

export const updateCart = (data) => {
	return async (dispatch) => {
		dispatch(cart_updateCart(data));
	};
};

export const updatePaymentMode = (data) => {
	return async (dispatch) => {
		dispatch(cart_updatePaymentMode(data));
	};
};