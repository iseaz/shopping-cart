export const addTocart = book => {
	return {
		type: 'ADD_TO_CART',
		payload: book
	}
}