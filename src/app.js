import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'

import BooksList from './components/pages/booksList'

// step 3 define reducers
import reducers from './reducers'

// step 1 create the store
const middleware = applyMiddleware(logger)
const store = createStore(reducers, middleware)

// step 2 create and dispatch actions

render(
	<Provider store={store}>
		<BooksList />
	</Provider>,
	document.getElementById('app')
)