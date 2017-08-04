import React, { Component } from 'react'

export default class TextWithImage extends Component {
	render() {
		return (
			<div className={ this.props.data.className }>
				{ this.props.data.text }
				<b></b>
			</div>
		)
	}
}
