import React from 'react'

function Todo (props) {
	return (
		<div className="todo-item">
			<input type="checkbox" checked={props.data.completed} onChange={() => props.handleChange} />
			<p>{props.data.title}</p>
		</div>
	)
}
export default Todo