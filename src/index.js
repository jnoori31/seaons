import React from 'react';
import ReactDOM from 'react-dom';


//functional component
//const App = () => {
	//window.navigator.geolocation.getCurrentPosition(
		//position => console.log(position),
		//err => console.log(err)
	//);

	//return <div>Hi there!</div>;

//};

//class component with render method assigned
// extneds is like inheritence in ruby where we inherit React.Component class
class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = { lat: null, errorMessage: '' };

		window.navigator.geolocation.getCurrentPosition(

			position => {
				// setState call to update set object
				this.setState({ lat: position.coords.latitude});
			},

			err => {
				this.setState({errorMessage: err.message });
			}
		);
	}

	// React says we have to define render
	render() {
		return (
			<div>
			Latitude: {this.state.lat}
			<br />
			Error: {this.state.errorMessage}
			</div>
			);
	}
}

ReactDOM.render( <App />, document.querySelector('#root'));
