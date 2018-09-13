const initialState = {
	books: [{
		_id: 1,
		title: 'This is the book title',
		description: 'This is the book description',
		price: 33.33
	}, {
		_id: 2,
		title: 'This is the second book title',
		description: 'This is the second book description',
		price: 57.64
	}]
}

export default (state = initialState, action) => {
	switch (action.type) {
		case 'GET_BOOKS':
			return {
				...state,
				books: state.books
			}
		break

		case 'POST_BOOK':
			return { books: [...state.books, ...action.payload] }
		break

		case 'DELETE_BOOK':
			const currentBookToDelete = [...state.books]
			const indexToDelete = currentBookToDelete.findIndex(item => item._id == action.payload)

			return {
				books: [...currentBookToDelete.slice(0, indexToDelete), ...currentBookToDelete.slice(indexToDelete+1)]
			}
		break

		case 'UPDATE_BOOK':
			const currentBookToUpdate = [...state.books]
			const indexToUpdate = currentBookToUpdate.findIndex(item => item._id == action.payload._id)
			const newBookToUpdate = {
				...currentBookToUpdate[indexToUpdate],
				title: action.payload.title
			}

			return {
				books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate+1)]
			}
		break
	}

	return state
}