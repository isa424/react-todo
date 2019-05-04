import React from 'react';

class Footer extends React.Component {
	render() {
		const {todos} = this.props;

		return (
			<div className={'footer'}>
				<span>All: {todos.length}</span>
				<span>Active: {todos.filter(t => !t.done).length}</span>
				<span>Done: {todos.filter(t => t.done).length}</span>
			</div>
		);
	}
}

export default Footer;
