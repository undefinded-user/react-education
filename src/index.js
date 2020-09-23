import React from 'react'
import ReactDOM from 'react-dom'



class App extends React.Component {
	constructor(){
		super()
		this.state ={
			firstName: '',
			lastName: 	'',
			age: 		'',
			gender: 	'',
			destination: '',
			dietaryRestriction: {
				isVegan: false,
				isKosher: false,
				isLactoseFree: false
			}
		}
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event){
		const {value, name,type, checked} = event.target
		type === "checkbox"?
		this.setState(prevState => {
			return {
				dietaryRestriction: {
					...prevState.dietaryRestriction,
					[name] : checked
				}
			}
		}) : 
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
					/><br />
					<input 
						type="text"
						name="lastName"
						value={this.state.lastName}
						onChange={this.handleChange}
						placeholder="Last Name"
					/><br />
					<input 
						type="number"
						name="age"
						value={this.state.age}
						onChange={this.handleChange}
					/>
					<p>Please, choose your gender</p>
					<label>
						<input
							type="radio"
							name="gender"
							value="male"
							checked={this.state.gender === "male"}
							onChange={this.handleChange}
						/> Male	
					</label>
					<label>
						<input
							type="radio"
							name="gender"
							value="female"
							checked={this.state.gender === "female"}
							onChange={this.handleChange}
						/>Female
					</label>
					<p>Destination ypu want to fly</p>
					<select name="destination" value={this.state.destination} onChange={this.handleChange}>
						<option value="">Choose destination</option>
						<option value="greece">Greece</option>
						<option value="japan">Japan</option>
						<option value="china">China</option>
						<option value="spane">Spane</option>
					</select>
					<p>Do you have any dietary restriction?</p>
					<label>
						<input 
							type="checkbox"
							name="isVegan"
							checked={this.state.dietaryRestriction.isVegan}
							onChange={this.handleChange}
						/>Vegan
					</label>
					<label>
						<input 
							type="checkbox"
							name="isKosher"
							checked={this.state.dietaryRestriction.isKosher}
							onChange={this.handleChange}
						/>Kosher
					</label>
					<label>
						<input
							type="checkbox"
							name="isLactoseFree"
							checked={this.state.dietaryRestriction.isLactoseFree}
							onChange={this.handleChange}
						/>Lactose Free
					</label>
				</form>
				<div>
					<p>First Name: {this.state.firstName}</p>
					<p>Last Name: {this.state.lastName}</p>
					<p>Age: {this.state.age}</p>
					<p>Gender: {this.state.gender}</p>
					<p>Destination: {this.state.destination}</p>
					<p>Dietary restriction: 
					</p>
				</div>

				
			</main>

		)
	}
}

ReactDOM.render(<App /> , document.getElementById("root"))