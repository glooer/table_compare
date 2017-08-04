import React, { Component } from 'react'

export default class LinkContainer extends Component {

	render() {
		return (
			<a
				className={ this.props.data.className } 
				href={ this.props.data.href }
			>{ this.props.data.text }</a>
		)
	}
}
