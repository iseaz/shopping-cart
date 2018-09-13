const initialState = {
	cart: [],
	totalAmount: 0,
	totalQty: 0
}

export default (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_TO_CART':
			return {
				...state,
				cart: action.payload,
				totalAmount: totals(action.payload).amount,
				totalQty: totals(action.payload).qty
			}
		break

		case 'DELETE_CART_ITEM':
			return {
				...state,
				cart: action.payload,
				totalAmount: totals(action.payload).amount,
				totalQty: totals(action.payload).qty
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
				cart: cartUpdate,
				totalAmount: totals(cartUpdate).amount,
				totalQty: totals(cartUpdate).qty
			}
		break
	}

	return state
}

export const totals = payloadArr => {
	const totalAmount = payloadArr.map(item => {
		return item.price * item.quantity
	}).reduce((a, b) => a + b, 0)
	
	const totalQty = payloadArr.map(item => {
		return item.quantity
	}).reduce((a, b) => a + b, 0)

	return {
		amount: totalAmount.toFixed(2),
		qty: totalQty
	}
}