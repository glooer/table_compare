import React, { Component } from 'react'

export default class TextWithTooltip extends Component {

	getUnsafeHTML(params = {}) {
		return (
			<div className={ params.className } dangerouslySetInnerHTML={
				params
			 }></div>
		);
	}

	render() {
		return (
				<div className={ this.props.data.className }>
					<div className="icon">
						{ this.props.data.tooltip ? this.getUnsafeHTML({
							__html: this.props.data.tooltip,
							className: 'compare-table__tooltip'
						}) : '' }
					</div>
			</div>
		)
	}
}
