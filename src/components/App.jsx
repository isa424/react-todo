import React from 'react';
import { hot } from 'react-hot-loader';
import TodoList from './TodoList';
import Footer from "./Footer";
import Form from "./Form";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			newTodo: '',
			todos: [
				{
					text: 'First',
					done: false,
				},
				{
					text: 'Second',
					done: false,
				}
			]
		};

		this.state.allChecked = this.state.todos.every(t => t.done);

		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleCheckAll = this.handleCheckAll.bind(this);
		this.removeTodo = this.removeTodo.bind(this);
	}

	componentDidMount() {
		// this.setState({
		// 	allChecked: this.state.todos.every(t => t.done),
		// });
	}

	addTodo(text) {
		if (text && text.trim().length) {
			const todo = {text, done: false};

			this.setState({
				newTodo: '',
				todos: this.state.todos.concat(todo),
			});
		}
	}

	removeTodo(index) {
		const todos = this.state.todos.filter((t, i) => i !== index);

		this.setState({
			todos: todos,
		});
	}

	handleCheckAll() {
		const todos = this.state.todos.map(t => {
			t.done = !this.state.allChecked;

			return t;
		});

		this.setState({
			allChecked: !this.state.allChecked,
			todos: todos,
		})
	}

	handleClick(index) {
		const todos = this.state.todos;
		todos[index].done = !todos[index].done;
		const allChecked = todos.filter(t => t.done).length === todos.length;

		this.setState({
			allChecked: allChecked,
			todos: todos
		});
	}

	handleChange(e) {
		const target = e.target;
		const name = target.name;
		const value = target.type === 'checkbox' ? target.checked : target.value;

		this.setState({
			[name]: value,
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		this.addTodo(this.state.newTodo);
	}

	render() {
		return (
			<div className={'app'}>
				<Form
					allChecked={this.state.allChecked}
					handleCheckAll={this.handleCheckAll}
					handleSubmit={this.handleSubmit}
					handleChange={this.handleChange}
					newTodo={this.state.newTodo}/>
				<TodoList
					remove={this.removeTodo}
					todos={this.state.todos}
					handleClick={this.handleClick}/>
				<Footer todos={this.state.todos}/>
			</div>
		);
	}
}

export default hot(module)(App);
