import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import BooksList from './components/pages/booksList'
import Cart from './components/pages/cart'
import BooksForm from './components/pages/booksForm'
import Main from './main'

// step 3 define reducers
import reducers from './reducers'

// step 1 create the store
const middleware = applyMiddleware(logger)
const store = createStore(reducers, middleware)

// step 2 create and dispatch actions

const Routes = (
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={Main}>
				<IndexRoute component={BooksList} />
				<Route path="/admin" component={BooksForm} />
				<Route path="/cart" component={Cart} />
			</Route>
		</Router>
	</Provider>
)

render(
	Routes,
	document.getElementById('app')
)