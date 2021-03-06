var React = require('react');
var ReactDOM = require('react-dom');

var {Route, Router, IndexRoute, hashHistory} = require('react-router'); // creates new var Route and sets it equal to require('react-router').Route
// it creates new variable X and sets it equal to whatever object.X is  

var Main = require('Main'); //Component form the main.jsx
var Timer = require('Timer');
var Countdown = require('Countdown');

//Load foundation

$(document).foundation();

//App CSS

require('style!css!sass!applicationStyles');

//<Route path="/" component={Main}> Main component gets rendered because it matches the path (/);
//<Route path="/" component={Main}> will always get rendered, but if path matches any path of children elements - respective child will be rendered
//Othervise - IndexRoute will be rendered

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<Route path="countdown" component={Countdown}>
			</Route>
			<IndexRoute component={Timer}></IndexRoute>
		</Route>
	</Router>,
	document.getElementById('app')
);


