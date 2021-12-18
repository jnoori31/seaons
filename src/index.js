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
	// constructor function but refactored see Babeljs.io
	state = { lat: null, errorMessage: '' };

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			position => this.setState({ lat: position.coords.latitude}),
			err => this.setState({errorMessage: err.message })
		);
	}

	// componentDidUpdate() {
	// 	console.log('The componenent just re-rendered on screen')
	// };

	// React says we have to define render
	render() {
		if (this.state.errorMessage && !this.state.lat) {
			return <div>Error: {this.state.errorMessage}</div>
		}
		if (!this.state.errorMessage && this.state.lat) {
			return <div>latitude: {this.state.lat}</div>
		}
		return <div>Loading!</div>;
	}
}

ReactDOM.render( <App />,document.querySelector('#root'));
