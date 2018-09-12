const initialState = {
	cart: []
}

export default (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_TO_CART':
			return {
				cart: [...state.cart, ...action.payload]
			}
	}

	return state
}