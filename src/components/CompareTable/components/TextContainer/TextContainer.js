import React, { Component } from 'react'

export default class TextContainer extends Component {
	getUnsafeHTML(params = {}) {
		return (
			<div className={ params.className } dangerouslySetInnerHTML={
				params
			 }></div>
		);
	}

	render() {
		return this.getUnsafeHTML({
			__html: this.props.data.text,
			className: this.props.data.className
		})
	}
}
