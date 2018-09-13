import React, { Component } from 'react'
import {
	Well,
	Panel,
	FormControl,
	FormGroup,
	ControlLabel,
	Button
} from 'react-bootstrap'
import { findDOMNode } from 'react-dom'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { postBooks, deleteBooks } from '../../actions/booksActions'

class BooksForm extends Component {
	handleSubmit = () => {
		const book = [{
			_id: Math.floor(Math.random()*1234),
			title: findDOMNode(this.refs.title).value,
			description: findDOMNode(this.refs.description).value,
			price: findDOMNode(this.refs.price).value
		}]

		this.props.postBooks(book)
	}

	onDelete = () => {
		let bookID = findDOMNode(this.refs.del).value
		
		this.props.deleteBooks(bookID)
	}

	render(){
		const booksList = this.props.books.map(item => {
			return (
				<option key={item._id} value={item._id}>{item.title}</option>
			)
		})

		return (
			<Well>
				<Panel>
					<Panel.Body>
						<FormGroup controlId="title">
							<ControlLabel>Title</ControlLabel>
							<FormControl type="text" placeholder="Enter Title" ref="title"></FormControl>
						</FormGroup>

						<FormGroup controlId="description">
							<ControlLabel>Description</ControlLabel>
							<FormControl type="text" placeholder="Enter Description" ref="description"></FormControl>
						</FormGroup>

						<FormGroup controlId="price">
							<ControlLabel>Price</ControlLabel>
							<FormControl type="text" placeholder="Enter Price" ref="price"></FormControl>
						</FormGroup>

						<Button onClick={this.handleSubmit} bsStyle="primary">Save</Button>
					</Panel.Body>
				</Panel>

				<Panel>
					<Panel.Body>
						<FormGroup controlId="formControlSelect">
							<ControlLabel>Select a book id to delete</ControlLabel>
							<FormControl componentClass="select" placeholder="Select" ref="del">
								<option value="Select">Select</option>
								{booksList}
							</FormControl>
						</FormGroup>

						<Button bsStyle="danger" onClick={this.onDelete}>Delete book</Button>
					</Panel.Body>
				</Panel>
			</Well>
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
		postBooks,
		deleteBooks
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksForm)