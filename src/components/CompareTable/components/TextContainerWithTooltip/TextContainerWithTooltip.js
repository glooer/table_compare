import React, { Component } from 'react'
import TextWithTooltip			from '../TextWithTooltip/TextWithTooltip';

export default class TextContainerWithTooltip extends Component {
	render() {
		return (
			<div className={ this.props.data.className }>
				{ this.props.data.text }
				<TextWithTooltip data={ {
					tooltip: this.props.data.tooltip,
					className: 'compare-table__os_icon notice'
				} } />
			</div>
		)
	}
}
