import React, { Component } from 'react'
import {
	Well,
	Panel,
	FormControl,
	FormGroup,
	ControlLabel,
	Button
} from 'react-bootstrap'

import { connect } from 'react-redux'

class BooksForm extends Component {
	render(){
		return (
			<Well>
				<Panel>
					<FormGroup controlId="title">
						<ControlLabel>Title</ControlLabel>
						<FormControl type="text" placeholder="Enter Title" ref="title"></FormControl>
					</FormGroup>

					<FormGroup controlId="title">
						<ControlLabel>Title</ControlLabel>
						<FormControl type="text" placeholder="Enter Title" ref="title"></FormControl>
					</FormGroup>

					<FormGroup controlId="title">
						<ControlLabel>Title</ControlLabel>
						<FormControl type="text" placeholder="Enter Title" ref="title"></FormControl>
					</FormGroup>
				</Panel>
			</Well>
		)
	}
}

export default BooksForm