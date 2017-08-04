import React, { Component } from 'react'
import TextWithTooltip			from '../TextWithTooltip/TextWithTooltip';

export default class TextWithTooltipGroup extends Component {

	render() {
		return (
			<div className={ this.props.data.className }>
				{ this.props.data.data.map(value => {
					return React.createElement(TextWithTooltip, {
						data: value
					});
				}) }
			</div>
		)
	}
}
