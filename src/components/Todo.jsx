import React from 'react';

class Todo extends React.Component {
	render() {
		const {todo, index, remove, handleClick} = this.props;

		return (
			<li>
				<div>
					<input type="checkbox" onChange={() => handleClick(index)} checked={todo.done}/>
					<span>{todo.text}</span>
				</div>
				<a href={'#asdf'} onClick={() => remove(index)}>&times;</a>
			</li>
		);
	}
}

export default Todo;
