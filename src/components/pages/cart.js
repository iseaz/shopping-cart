import React, { Component } from 'react'
import { Modal, Panel, Col, Row, Well, Button, ButtonGroup, Label } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { deleteCartItem, updateCart } from '../../actions/cartActions'

class Cart extends Component {
	constructor(props){
		super(props)

		this.state = {
			showModal: false
		}
	}

	onDelete(_id){
		const currentCartToDelete = this.props.cart
		const indexToDelete = currentCartToDelete.findIndex(item => item._id == _id)

		const cartAfterDelete = [...currentCartToDelete.slice(0, indexToDelete), ...currentCartToDelete.slice(indexToDelete+1)]

		this.props.deleteCartItem(cartAfterDelete)
	}

	onIncrement(_id){
		this.props.updateCart(_id, 1)
	}

	onDecrement(_id, quantity){
		if (quantity > 1) {
			this.props.updateCart(_id, -1)
		}
	}

	onCheckout = () => {
		this.setState({
			showModal: true
		})
	}

	close = () => {
		this.setState({
			showModal: false
		})
	}

	renderCart = () => {
		const cardItemList = this.props.cart.map(item => {
			return (
				<Panel key={item._id}>
					<Panel.Body>
						<Row>
							<Col xs={12} sm={4}>
								<h6>{item.title}</h6>
							</Col>
							<Col xs={12} sm={2}>
								<h6>usd. {item.price}</h6>
							</Col>
							<Col xs={12} sm={2}>
								<h6>qty. <Label bsStyle="success">{item.quantity}</Label></h6>
							</Col>
							<Col xs={12} sm={4}>
								<ButtonGroup style={{ minWidth: 300 }}>
									<Button bsStyle="default" bsSize="small" onClick={() => this.onDecrement(item._id, item.quantity)}>-</Button>
									<Button bsStyle="default" bsSize="small" onClick={() => this.onIncrement(item._id)}>+</Button>
									<Button bsStyle="danger" bsSize="small" onClick={() => this.onDelete(item._id)}>Delete</Button>
								</ButtonGroup>
							</Col>
						</Row>
					</Panel.Body>
				</Panel>
			)
		})

		return (
			<Panel bsStyle="primary">
				<Panel.Heading>Cart</Panel.Heading>
				<Panel.Body>
					{cardItemList}

					<Row>
						<Col xs={12}>
							<h6>Total amount $: {this.props.totalAmount}</h6>
							<Button bsStyle="success" bsSize="small" onClick={this.onCheckout}>Proceed to checkout</Button>
						</Col>
					</Row>
				</Panel.Body>

				<Modal show={this.state.showModal} onHide={this.close}>
					<Modal.Header closeButton>
						<Modal.Title>Modal heading</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<h6>Your order has been saved</h6>
						<p>you will receive an email confirmation</p>
					</Modal.Body>
					<Modal.Footer>
						<Col xs={6}>
							<h6>total $: {this.props.totalAmount}</h6>
						</Col>
						<Button onClick={this.close}>Close</Button>
					</Modal.Footer>
				</Modal>
			</Panel>
		)
	}

	render(){
		if (this.props.cart[0]) {
			return this.renderCart()
		} else {
			return (
				<div></div>
			)
		}
	}
}

const mapStateToProps = state => {
	return {
		cart: state.cart.cart,
		totalAmount: state.cart.totalAmount
	}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ deleteCartItem, updateCart }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)