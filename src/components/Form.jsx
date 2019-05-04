import React from 'react';

class Form extends React.Component {
	render() {
		const {handleSubmit, handleChange, newTodo, handleCheckAll, allChecked} = this.props;

		return (
			<form className={'form'} onSubmit={handleSubmit}>
				<div>
					<input type="checkbox" onChange={() => handleCheckAll()} checked={allChecked}/>
				</div>
				<div>
					<input type="text"
						name={'newTodo'}
						placeholder={'Add todo..'}
						onChange={handleChange}
						value={newTodo}/>
					<input type="submit" value={'Add'}/>
				</div>
			</form>
		);
	}
}

export default Form;
