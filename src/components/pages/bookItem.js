import React, { Component } from 'react'
import { Col, Row, Button, Well } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addTocart, updateCart } from '../../actions/cartActions'

class BookItem extends Component {
	handleCart = () => {
		const book = [...this.props.cart, {
			_id: this.props._id,
			title: this.props.title,
			description: this.props.description,
			price: this.props.price,
			quantity: 1
		}]

		if (this.props.cart.length > 0) {
			let _id = this.props._id
			let cartIndex = this.props.cart.findIndex(item => item._id == _id)

			if (cartIndex == -1) {
				this.props.addTocart(book)
			} else {
				this.props.updateCart(_id, 1)
			}
		} else {
			this.props.addTocart(book)
		}
	}

	render(){
		return (
			<Well>
				<Row>
					<Col xs={12}>
						<h6>{this.props.title}</h6>
						<p>{this.props.description}</p>
						<h6>usd. {this.props.price}</h6>
						<Button onClick={this.handleCart} bsStyle="primary">Buy now!</Button>
					</Col>
				</Row>
			</Well>
		)
	}
}

const mapStateToProps = state => {
	return {
		cart: state.cart.cart
	}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ addTocart, updateCart }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookItem)