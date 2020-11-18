import React from 'react'
import ReactDOM from 'react-dom'



function MyApp () {
	return (
		<>
			<h1>Hellow everyone</h1>
			<p>This message is from React</p>
			<p>My first functional component</p>
		</>
		)
}

ReactDOM.render(<MyApp /> , document.getElementById("root"))