import React from 'react';
// import CompareTableDefaultState from './defaultState'
import ComponentList from './ComponentList'
import $ from 'jquery';

export default class CompareTable extends React.Component {

	constructor(props) {
		super(props)

		this.state.data = this.props.data
	}

	componentDidMount() {
		$.get(this.props.source, function(result) {
			this.setState({
				data: result
			})
		}.bind(this))
	}

	state = {
		data: {}
	}

	renderComponent(component_name, params) {
		let component = ComponentList[component_name];
		if (!component) {
			return (
				<div>
					Компонент {component_name} не найден
				</div>
			)
		}

		return React.createElement(component, { data: params })
	}

	renderTH({ class_name, components, colspan }) {
		return (
			<th className={ class_name } colSpan={ colspan } >
				{ components.map(value => {
					return this.renderComponent(value.component, value.params)
				}) }
			</th>
		)
	}

	renderTD({ class_name, components, colspan, is_header }) {
		if (is_header) {
			return this.renderTH({
				class_name: class_name,
				components: components,
				colspan: colspan
			})
		}

		return (
			<td className={ class_name } colSpan={ colspan } >
				{ components.map(value => {
					return this.renderComponent(value.component, value.params)
				}) }
			</td>
		)
	}

	renderTR(element, is_header = false) {
		return (
			<tr>
				{ element.map((value, i) => {
					
					return this.renderTD({
						class_name: value.tdClass || null,
						colspan: value.colspan || null,
						components: value.content,
						is_header: is_header
					})
				}) }
			</tr>
		)
	}

	render() {
		return (
			<div>
				<table id={ this.props.id } className="compare-table">
					<thead>
						{ this.renderTR(this.state.data.header, true) }
					</thead>
					<tbody>
						{ this.state.data.body.map(value => {
							return this.renderTR(value)
						}) }
					</tbody>
				</table>
			</div>

		)
	}
}
