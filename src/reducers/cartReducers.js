const initialState = {
	cart: []
}

export default (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_TO_CART':
			return {
				...state,
				cart: [...state, ...action.payload]
			}
		break

		case 'DELETE_CART_ITEM':
			return {
				...state,
				cart: [...state, ...action.payload]
			}
		break

		case 'UPDATE_CART':
			const currentCartToUpdate = [...state.cart]
			const indexToUpdate = currentCartToUpdate.findIndex(item => item._id == action._id)
			const newCartToUpdate = {
				...currentCartToUpdate[indexToUpdate],
				quantity: currentCartToUpdate[indexToUpdate].quantity + action.unit
			}

			const cartUpdate = [
				...currentCartToUpdate.slice(0, indexToUpdate),
				newCartToUpdate,
				...currentCartToUpdate.slice(indexToUpdate+1)
			]

			return {
				...state,
				cart: cartUpdate
			}
		break
	}

	return state
}