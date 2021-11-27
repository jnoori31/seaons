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
	render() {
		window.navigator.geolocation.getCurrentPosition(
		position => console.log(position),
		err => console.log(err)
	);
		return <div>Latitude:</div>;
	}
}

ReactDOM.render( <App />, document.querySelector('#root'));
