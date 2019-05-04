import React from 'react';
import Todo from "./Todo";

class TodoList extends React.Component {
	render() {
		const {todos, remove, handleClick} = this.props;

		return (
			<ul>
				{todos.map((t, i) => (
					<Todo remove={remove} key={i} index={i} todo={t} handleClick={handleClick}/>
				))}
			</ul>
		);
	}
}

export default TodoList;
