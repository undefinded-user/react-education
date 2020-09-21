import React from 'react'
import ReactDOM from 'react-dom'
import Todo from './components/Todo.js'


class MyApp extends React.Component {
	constructor(){
		super()
		this.state = {
			todos: []
		}
		this.state.createTodoComponents = this.createTodoComponents.bind(this)
		this.changeHandler = this.changeHandler.bind(this)
	}

	componentDidMount(){
		fetch("https://jsonplaceholder.typicode.com/todos/")
			.then(res => res.json())
				.then(data => this.setState({
					todos: data
				}))
		
	}

	changeHandler(id){
		const updatedTodos = this.state.todos.map( (todoItem) => {
			if(id === todoItem.id) return {
				...todoItem,
				completed: !todoItem.completed
			}
			return todoItem
		})
		this.setState({
			todos: updatedTodos
		})
	}

	createTodoComponents(){
		const todosComponents = this.state.todos.map( todoData => {
			return <Todo 
						data={todoData} 
						changeHandler={this.changeHandler}
						key={todoData.id}
					/>
		})

		return todosComponents
	}

	render(){
		
		return(
			<div>
				{this.createTodoComponents()}
			</div>
		)
	}

}

ReactDOM.render(<MyApp /> , document.getElementById("root"))