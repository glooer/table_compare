import React, { Component } from 'react'

export default class TextContainer extends Component {
	render() {
		return (
			<div>
				{ this.props.data.text }
			</div>
		)
	}
}
