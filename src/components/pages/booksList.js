import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Grid, Col, Row, Button } from 'react-bootstrap'

import { getBooks } from '../../actions/booksActions'
import BookItem from '../pages/bookItem'
import BooksForm from '../pages/booksForm'

class BooksList extends Component {
	componentDidMount(){
		this.props.getBooks()
	}

	render(){
		const booksList = this.props.books.map(item => {
			return (
				<Col xs={12} sm={6} md={4} key={item.id}>
					<BookItem id={item.id} title={item.title} description={item.description} price={item.price} />
				</Col>
			)
		})

		return (
			<Grid>
				<Row style={{ marginTop: 15 }}>
					{booksList}
				</Row>

				<BooksForm />
			</Grid>
		)
	}
}

const mapStateToProps = state => {
	return {
		books: state.books.books
	}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
		getBooks: getBooks
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList)