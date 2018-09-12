export const getBooks = () => {
	return {
		type: 'GET_BOOKS'
	}
}

export const postBooks = book => {
	return {
		type: 'POST_BOOK',
		payload: book
	}
}

export const deleteBooks = id => {
	return {
		type: 'DELETE_BOOK',
		payload: id
	}
}

export const updateBooks = book => {
	return {
		type: 'UPDATE_BOOK',
		payload: book
	}
}