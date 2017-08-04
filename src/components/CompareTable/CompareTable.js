import React from 'react';
import CompareTableDefaultState from './defaultState'
import ComponentList from './ComponentList'

export default class CompareTable extends React.Component {

	state = {
		data: CompareTableDefaultState
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
				{ element.map(value => {
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
				<table className="compare-table">
					<tbody>
						{ this.renderTR(this.state.data.header, true) }
						{ this.state.data.body.map(value => {
							return this.renderTR(value)
						}) }
					</tbody>
				</table>
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
			</div>

		)
	}
}
