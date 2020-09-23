import React from 'react'
import ReactDOM from 'react-dom'



class App extends React.Component {
	constructor(){
		super()
		this.state ={
			firstName: ''
		}
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event){
		const {value, name} = event.target
		this.setState({
			[name] : value
		})
	}
	render(){
		return(
			<main>
				<form>
					<input
						type="text"
						name="firstName"
						value={this.state.firstName}
						onChange={this.handleChange}
						placeholder="First Name"
					/>

				</form>

				<p>First Name: {this.state.firstName}</p>

			</main>

		)
	}
}

ReactDOM.render(<App /> , document.getElementById("root"))