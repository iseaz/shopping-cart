import React from 'react'
import { Badge, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

class Menu extends React.Component {
	render(){
		return (
			<Navbar inverse fixedTop>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="/">NBS Shopping Cart</a>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>

				<Navbar.Collapse>
					<Nav>
						<NavItem eventKey={1} href="/about">
							About
						</NavItem>
						<NavItem eventKey={2} href="/contact">
							Contact us
						</NavItem>
					</Nav>

					<Nav pullRight>
						<NavItem eventKey={1} href="/admin">
							Admin
						</NavItem>
						<NavItem eventKey={1} href="/cart">
							Your cart <Badge className="badge">1</Badge>
						</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		)
	}
}

export default Menu